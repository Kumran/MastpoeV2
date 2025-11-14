//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

import React from "react";
import { 
  Alert,           // For confirmation dialogs
  FlatList,        // Efficient scrolling list
  Image, 
  SafeAreaView,    // Safe container respecting notches/status bars
  StyleSheet, 
  Text, 
  TouchableOpacity, // Buttons
  View 
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { menuItem, RootStackParamlist } from "../type";

// Props include navigation, items array, remove function, and average prices
type Props = NativeStackScreenProps<RootStackParamlist, "HomeScreen"> & {
  items: menuItem[];
  removeItem: (id: string) => void;
  averages: { STARTER: string; MAIN: string; DESSERT: string };
};

export default function HomeScreen({ navigation, items, removeItem, averages }: Props) {

  // Function to show confirmation before removing an item
  const confirmRemove = (id: string) => {
    Alert.alert(
      "Remove item",
      "Are you sure you want to remove this item?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", style: "destructive", onPress: () => removeItem(id) },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Heading showing total number of menu items */}
      <Text style={styles.heading}>Our Menu ({items.length})</Text>

      {/* Stats row showing average price & item count for each category */}
      <View style={styles.statsRow}>
        {["STARTER","MAIN","DESSERT"].map((cat) => (
          <View key={cat} style={styles.stat}>
            <Text style={styles.statLabel}>{cat}s</Text>
            <Text style={styles.statValue}>R{averages[cat as keyof typeof averages]}</Text>
            <Text style={styles.statCount}>
              {items.filter(i => i.category === cat).length} items
            </Text>
          </View>
        ))}
      </View>

      {/* FlatList rendering all menu items */}
      <FlatList
        data={items}
        keyExtractor={(i) => i.id} // Use unique ID as key
        renderItem={({ item }) => (
          <View style={styles.card}>
            {/* Item image */}
            <Image source={{ uri: item.image }} style={styles.image} />

            <View style={styles.body}>
              {/* Item title and description */}
              <Text style={styles.title}>{item.itemName}</Text>
              <Text style={styles.desc}>{item.description}</Text>

              {/* Meta info: category, price, intensity */}
              <Text style={styles.meta}>
                {item.category} · R{item.price} · {item.intensity}
              </Text>

              {/* Remove button */}
              <TouchableOpacity style={styles.remove} onPress={() => confirmRemove(item.id)}>
                <Text style={styles.removeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 120 }} // bottom padding for FABs
      />

      {/* Floating Action Buttons */}
      <View style={styles.fabs}>
        {/* Navigate to AddItemScreen */}
        <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate("AddItemScreen")}>
          <Text style={styles.fabText}>Add</Text>
        </TouchableOpacity>

        {/* Navigate to FilterScreen */}
        <TouchableOpacity style={[styles.fab, styles.fabAlt]} onPress={() => navigation.navigate("Filter", { items })}>
          <Text style={styles.fabText}>Filter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// Color palette
const c = { 
  bg:"#FFFFFF", 
  card:"#F5F5F5", 
  text:"#000000", 
  meta:"#666666", 
  accent:"#D4AF37", 
  chip:"#EEEEEE" 
};

// Styles
const styles = StyleSheet.create({
  container: { flex:1, backgroundColor:c.bg, padding:16 },

  heading: { 
    color:c.text, 
    fontSize:26, 
    fontWeight:"900", 
    textAlign:"center", 
    marginBottom:12 
  },

  // Stats row for each category
  statsRow: { flexDirection:"row", justifyContent:"space-between", marginBottom:12 },
  stat: { 
    backgroundColor:c.card, 
    width:"32%", 
    borderRadius:14, 
    paddingVertical:10, 
    alignItems:"center", 
    elevation:3 
  },
  statLabel: { color:c.meta, fontSize:12 },
  statValue: { color:c.text, fontSize:16, fontWeight:"800" },
  statCount: { color:c.meta, fontSize:11, marginTop:4 },

  // Card for each menu item
  card: { 
    backgroundColor:c.card, 
    borderRadius:16, 
    overflow:"hidden", 
    marginVertical:8, 
    elevation:4 
  },
  image: { width:"100%", height:200 },
  body: { padding:12 },
  title: { color:c.text, fontSize:18, fontWeight:"800" },
  desc: { color:c.meta, marginVertical:6 },
  meta: { color:c.text, fontSize:12, opacity:0.7 },

  // Remove button
  remove: { backgroundColor:c.chip, paddingVertical:10, borderRadius:10, alignItems:"center", marginTop:10 },
  removeText: { color:c.text, fontWeight:"800" },

  // Floating action buttons (Add / Filter)
  fabs: { position:"absolute", right:20, bottom:20, flexDirection:"row", gap:12 },
  fab: { backgroundColor:c.accent, paddingVertical:14, paddingHorizontal:22, borderRadius:30, elevation:6 },
  fabAlt: { backgroundColor:"#B8860B" },
  fabText: { color:c.bg, fontWeight:"900" },
});
