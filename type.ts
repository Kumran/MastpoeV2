//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

// Allowed menu categories
export type Course = "STARTER" | "MAIN" | "DESSERT";

// Menu item structure
export type menuItem = {
  id: string;               // Unique identifier for each item
  itemName: string;         // Name of the dish
  description: string;      // Description of the dish
  category: string;         // Should match Course ("STARTER" | "MAIN" | "DESSERT")
  price: number;            // Price in currency (e.g., Rands)
  intensity: "Mild" | "Balanced" | "Strong" | string; // Flavor intensity
  image: string;            // URL for the dish image
  ingredients: string[];    // List of ingredients
};

// Type for stack navigation parameters
export type RootStackParamlist = { 
  WelcomeScreen: undefined;             // No params
  HomeScreen: undefined;                // No params
  AddItemScreen: undefined;             // No params
  Filter: { items: menuItem[] };        // Filter screen receives menu items
};
