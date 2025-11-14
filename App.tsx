//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native"; // Main navigation container
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Stack navigator
import { menuItem, Course, RootStackParamlist } from "./type"; // Types
import WelcomeScreen from "./screens/WelcomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import FilterScreen from "./screens/FilterScreen";
import HomeScreen from "./screens/HomeScreen";

// Create a typed stack navigator
const Stack = createNativeStackNavigator<RootStackParamlist>();

// Predefined menu items (3 starters, 3 mains, 3 desserts)
const predefined: menuItem[] = [
  // STARTERS
  { id: "1", itemName: "Truffle-infused Butternut Velouté", description: "...", category: "STARTER", price: 135, intensity: "Balanced", image: "...", ingredients: ["Butternut Squash","Black Truffle Oil","Parmesan Cheese","Greek yogurt"] },
  { id: "2", itemName: "Pan-Seared Scallops with Lemon Beurre Blanc", description: "...", category: "STARTER", price: 165, intensity: "Balanced", image: "...", ingredients: ["Scallops","Butter","Lemon","Microgreens","Shallots"] },
  { id: "3", itemName: "Beef Carpaccio with Truffle Shavings", description: "...", category: "STARTER", price: 155, intensity: "Mild", image: "...", ingredients: ["Beef Tenderloin","Truffle","Capers","Red Onion","Olive Oil"] },
  // MAINS
  { id: "4", itemName: "Pan-Seared Lamb Fillet with Red Wine", description: "...", category: "MAIN", price: 205, intensity: "Bold", image: "...", ingredients: ["Lamb Fillet","Red Wine","Mash Potatoes","Baby Carrots"] },
  { id: "5", itemName: "Grilled Atlantic Salmon with Hollandaise", description: "...", category: "MAIN", price: 185, intensity: "Balanced", image: "...", ingredients: ["Atlantic Salmon","Hollandaise","Asparagus","Lemon","Dill"] },
  { id: "6", itemName: "Filet Mignon with Mushroom Risotto", description: "...", category: "MAIN", price: 245, intensity: "Bold", image: "...", ingredients: ["Filet Mignon","Arborio Rice","Mushrooms","Truffle Oil","Parmesan"] },
  // DESSERTS
  { id: "7", itemName: "Crème Brûlée", description: "...", category: "DESSERT", price: 85, intensity: "Mild", image: "...", ingredients: ["Heavy Cream","Egg Yolks","Vanilla Bean","Sugar"] },
  { id: "8", itemName: "Chocolate Lava Cake with Vanilla Ice Cream", description: "...", category: "DESSERT", price: 95, intensity: "Strong", image: "...", ingredients: ["Dark Chocolate","Butter","Eggs","Vanilla Ice Cream","Mint"] },
  { id: "9", itemName: "Lemon Posset with Shortbread", description: "...", category: "DESSERT", price: 75, intensity: "Mild", image: "...", ingredients: ["Heavy Cream","Lemon Juice","Sugar","Butter","Flour"] },
];

export default function App() {
  // App state: current list of menu items
  const [items, setItems] = useState<menuItem[]>(predefined);

  // Add a new menu item
  const addItem = (item: menuItem) => setItems((prev) => [...prev, item]);

  // Remove an item by id
  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));

  // Calculate average price for a given category
  const avg = (course: Course) => {
    const list = items.filter((i) => i.category === course);
    if (!list.length) return "0.00";
    const total = list.reduce((sum, i) => sum + i.price, 0);
    return (total / list.length).toFixed(2);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#FFFFFF" }, // White header background
          headerTintColor: "#D4AF37", // Golden header text
          headerTitleStyle: { fontWeight: "800" }, // Bold title
        }}
      >
        {/* Welcome screen (no header) */}
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        {/* Home screen */}
        <Stack.Screen name="HomeScreen" options={{ title: "Chef Christoffel's Kitchen" }}>
          {(props) => (
            <HomeScreen
              {...props}
              items={items} // Pass current menu items
              removeItem={removeItem} // Pass remove function
              averages={{ // Pass average prices for each category
                STARTER: avg("STARTER"),
                MAIN: avg("MAIN"),
                DESSERT: avg("DESSERT"),
              }}
            />
          )}
        </Stack.Screen>

        {/* Add item screen */}
        <Stack.Screen name="AddItemScreen" options={{ title: "Add New Item" }}>
          {(props) => <AddItemScreen {...props} addItem={addItem} />}
        </Stack.Screen>

        {/* Filter screen */}
        <Stack.Screen name="Filter" options={{ title: "Filter Menu" }}>
          {(props) => <FilterScreen {...props} items={items} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
