//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

import React from "react";
import { 
  ImageBackground, // To set a background image
  SafeAreaView,   // Ensures content is within safe area (notch/status bar)
  StyleSheet, 
  Text, 
  TouchableOpacity, // Button
  View 
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../type";

// Props for navigation
type Props = NativeStackScreenProps<RootStackParamlist, "WelcomeScreen">;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background image */}
      <ImageBackground
        source={{
          uri: "https://www.webstaurantstore.com/uploads/blog/2022/1/chocolate-covered-strawberries-with-edible-gold.jpg",
        }}
        style={styles.bg}
      >
        {/* Semi-transparent overlay for golden tint */}
        <View style={styles.overlay} />

        {/* Centered content */}
        <View style={styles.center}>
          {/* Main title */}
          <Text style={styles.title}>Welcome</Text>

          {/* Subtitle / tagline */}
          <Text style={styles.subtitle}>The best fine dining experience</Text>

          {/* Call-to-action button */}
          <TouchableOpacity 
            style={styles.cta} 
            onPress={() => navigation.replace("HomeScreen")} // Navigate to HomeScreen
          >
            <Text style={styles.ctaText}>MENU</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

// Styles for WelcomeScreen
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" }, // Safe container

  bg: { flex: 1, justifyContent: "center" }, // Background image stretches full screen

  overlay: { 
    ...StyleSheet.absoluteFillObject, // Fill entire background
    backgroundColor: "rgba(212,175,55,0.25)" // Semi-transparent golden overlay
  },

  center: { alignItems: "center", paddingHorizontal: 24 }, // Center content horizontally

  title: { color: "#000000", fontSize: 42, fontWeight: "800" }, // Main heading

  subtitle: { color: "#666666", fontSize: 16, marginTop: 6, marginBottom: 28 }, // Tagline

  cta: { 
    backgroundColor: "#D4AF37", 
    paddingVertical: 14, 
    paddingHorizontal: 44, 
    borderRadius: 28, 
    elevation: 6 // Shadow for Android
  },

  ctaText: { color: "#FFFFFF", fontWeight: "900", fontSize: 18 } // Button text
});
