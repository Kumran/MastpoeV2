//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamlist } from "../type";

type Props = NativeStackScreenProps<RootStackParamlist, "WelcomeScreen">;

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://www.webstaurantstore.com/uploads/blog/2022/1/chocolate-covered-strawberries-with-edible-gold.jpg",
        }}
        style={styles.bg}
      >
        <View style={styles.overlay} />
        <View style={styles.center}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>The best fine dining experience</Text>
          <TouchableOpacity style={styles.cta} onPress={() => navigation.replace("HomeScreen")}>
            <Text style={styles.ctaText}>MENU</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  bg: { flex: 1, justifyContent: "center" },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: "rgba(212,175,55,0.25)" },
  center: { alignItems: "center", paddingHorizontal: 24 },
  title: { color: "#000000", fontSize: 42, fontWeight: "800" },
  subtitle: { color: "#666666", fontSize: 16, marginTop: 6, marginBottom: 28 },
  cta: { backgroundColor: "#D4AF37", paddingVertical: 14, paddingHorizontal: 44, borderRadius: 28, elevation: 6 },
  ctaText: { color: "#FFFFFF", fontWeight: "900", fontSize: 18 },
});