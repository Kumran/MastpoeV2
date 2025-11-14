//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

import React, { useState } from "react";
import {
  KeyboardAvoidingView, // Adjusts the view when the keyboard is open (iOS & Android)
  Platform,             // Provides platform-specific info (iOS/Android)
  TouchableWithoutFeedback, // Allows dismissing the keyboard when tapping outside
  Keyboard,             // Provides keyboard methods
  ScrollView,           // Scrollable container for the form
  StyleSheet,           // Stylesheet creation
  Text,
  TextInput,            // Text input fields
  TouchableOpacity,     // Button component
  View,
  Image,
  Alert,                // Display alerts for validation messages
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // Dropdown picker for categories
import { NativeStackScreenProps } from "@react-navigation/native-stack"; // Type for navigation props
import { menuItem, Course, RootStackParamlist } from "../type"; // Import custom types

// Props type: navigation + addItem function
type Props = NativeStackScreenProps<RootStackParamlist, "AddItemScreen"> & {
  addItem: (item: menuItem) => void; // Function to add the new menu item
};

// Color palette object
const c = {
  bg: "#FFFFFF",
  card: "#F5F5F5",
  text: "#000000",
  meta: "#666666",
  accent: "#D4AF37",
  input: "#EEEEEE",
  border: "#D4AF37",
};

// Generate unique ID for each menu item
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

export default function AddItemScreen({ navigation, addItem }: Props) {
  // State variables for form inputs
  const [itemName, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<Course>("STARTER"); // default category
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");

  // Handle save button press
  const onSave = () => {
    // Validate required fields
    if (!itemName || !description || !price || !image) {
      Alert.alert("Missing fields", "Please fill in all required fields.");
      return;
    }

    const p = parseFloat(price); // Convert price string to number
    if (isNaN(p) || p <= 0) {
      Alert.alert("Invalid price", "Enter a valid number.");
      return;
    }

    // Determine intensity based on price
    const intensity: menuItem["intensity"] =
      p < 45 ? "mild" : p < 60 ? "balanced" : "strong";

    // Build menu item object
    const payload: menuItem = {
      id: uid(),
      itemName,
      description,
      category,
      price: p,
      intensity,
      image,
      ingredients: ingredients
        .split(",") // Split comma-separated string into array
        .map((s) => s.trim()) // Remove extra spaces
        .filter(Boolean), // Remove empty strings
    };

    // Call addItem function from props
    addItem(payload);

    // Navigate back to previous screen
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust view for keyboard
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}> 
        {/* Dismiss keyboard when tapping outside input */}
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.header}>Add New Item</Text>

          {/* Item Name Input */}
          <TextInput
            style={styles.input}
            placeholder="Item name"
            placeholderTextColor={c.meta}
            value={itemName}
            onChangeText={setItemName}
          />

          {/* Description Input */}
          <TextInput
            style={[styles.input, { height: 80 }]} // taller input for multiline
            placeholder="Description"
            placeholderTextColor={c.meta}
            value={description}
            onChangeText={setDescription}
            multiline
          />

          {/* Category Picker */}
          <Text style={styles.label}>Category</Text>
          <View style={styles.pickerBox}>
            <Picker
              selectedValue={category}
              onValueChange={(v) => setCategory(v as Course)}
              mode="dropdown"
              dropdownIconColor={c.accent}
              style={styles.picker}
            >
              <Picker.Item label="STARTER" value="STARTER" color={c.text} />
              <Picker.Item label="MAIN" value="MAIN" color={c.text} />
              <Picker.Item label="DESSERT" value="DESSERT" color={c.text} />
            </Picker>
          </View>

          {/* Price Input */}
          <TextInput
            style={styles.input}
            placeholder="Price"
            placeholderTextColor={c.meta}
            keyboardType="numeric" // numeric keyboard
            value={price}
            onChangeText={setPrice}
          />

          {/* Ingredients Input */}
          <TextInput
            style={styles.input}
            placeholder="Ingredients (comma separated)"
            placeholderTextColor={c.meta}
            value={ingredients}
            onChangeText={setIngredients}
          />

          {/* Image URL Input */}
          <TextInput
            style={styles.input}
            placeholder="Image URL"
            placeholderTextColor={c.meta}
            value={image}
            onChangeText={setImage}
          />

          {/* Image preview */}
          {image ? (
            <Image source={{ uri: image }} style={styles.preview} />
          ) : null}

          {/* Save Button */}
          <TouchableOpacity style={styles.save} onPress={onSave}>
            <Text style={styles.saveText}>Save Item</Text>
          </TouchableOpacity>

          {/* Cancel Button */}
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// Styles for the form
const styles = StyleSheet.create({
  form: {
    backgroundColor: c.bg,
    padding: 20,
    flexGrow: 1, // allows ScrollView to grow
  },
  header: {
    color: c.text,
    fontSize: 22,
    fontWeight: "900",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: c.input,
    color: c.text,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: c.border,
    height: 50,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  label: {
    color: c.meta,
    marginLeft: 4,
    marginBottom: 6,
    fontWeight: "700",
  },
  pickerBox: {
    backgroundColor: c.input,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: c.border,
    overflow: "hidden",
    height: 50,
    justifyContent: "center",
    marginBottom: 8,
  },
  picker: {
    color: c.text,
    height: 50,
    width: "100%",
  },
  preview: {
    width: "100%",
    height: 200,
    borderRadius: 12,
    marginTop: 12,
  },
  save: {
    backgroundColor: c.accent,
    padding: 14,
    borderRadius: 12,
    marginTop: 16,
    alignItems: "center",
  },
  saveText: {
    color: "#1b1513",
    fontWeight: "900",
  },
  cancel: {
    alignItems: "center",
    marginTop: 10,
  },
  cancelText: {
    color: c.meta,
    fontWeight: "800",
  },
});
