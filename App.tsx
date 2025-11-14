//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { menuItem, Course, RootStackParamlist } from "./type";
import WelcomeScreen from "./screens/WelcomeScreen";
import AddItemScreen from "./screens/AddItemScreen";
import FilterScreen from "./screens/FilterScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator<RootStackParamlist>();

const predefined: menuItem[] = [
  // STARTERS
  {
    id: "1",
    itemName: "Truffle-infused Butternut Velouté",
    description:
      "A silky butternut squash velouté infused with black truffle oil, topped with a parmesan crisp and micro herbs.",
    category: "STARTER",
    price: 135,
    intensity: "Balanced",
    image:
      "https://i.pinimg.com/736x/75/06/bf/7506bfc83b8d887bb61a01234faf043b.jpg",
    ingredients: ["Butternut Squash", "Black Truffle Oil", "Parmesan Cheese", "Greek yogurt"],
  },
  {
    id: "2",
    itemName: "Pan-Seared Scallops with Lemon Beurre Blanc",
    description:
      "Succulent scallops seared until golden, served with a silky lemon beurre blanc and microgreens.",
    category: "STARTER",
    price: 165,
    intensity: "Balanced",
    image:
      "https://cdn.shopify.com/s/files/1/0340/4057/8181/files/Scallops-HotSauce_wide_1920.jpg?v=1606767885",
    ingredients: ["Scallops", "Butter", "Lemon", "Microgreens", "Shallots"],
  },
  {
    id: "3",
    itemName: "Beef Carpaccio with Truffle Shavings",
    description:
      "Thinly sliced raw beef with capers, red onion, and generous truffle shavings dressed in olive oil.",
    category: "STARTER",
    price: 155,
    intensity: "Mild",
    image:
      "https://rivieraseafoodclub.com/cdn/shop/articles/Wagyu_Carpaccio_Recipe_with_Truffle_Oil.webp?v=1761339589",
    ingredients: ["Beef Tenderloin", "Truffle", "Capers", "Red Onion", "Olive Oil"],
  },
  // MAINS
  {
    id: "4",
    itemName: "Pan-Seared Lamb Fillet with Red Wine",
    description:
      "Tender lamb fillet seared to perfection, served on truffle mash and roasted veggies.",
    category: "MAIN",
    price: 205,
    intensity: "Bold",
    image:
      "https://i.pinimg.com/736x/7d/d5/92/7dd5929d174fb21896489115a6079cef.jpg",
    ingredients: ["Lamb Fillet", "Red Wine", "Mash Potatoes", "Baby Carrots"],
  },
  {
    id: "5",
    itemName: "Grilled Atlantic Salmon with Hollandaise",
    description:
      "Fresh Atlantic salmon fillet grilled to perfection, topped with a creamy hollandaise sauce and asparagus.",
    category: "MAIN",
    price: 185,
    intensity: "Balanced",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdS3DV4MIy6gL7l0LzPCPIcV9pIPuNI6s3Cg&s",
    ingredients: ["Atlantic Salmon", "Hollandaise", "Asparagus", "Lemon", "Dill"],
  },
  {
    id: "6",
    itemName: "Filet Mignon with Mushroom Risotto",
    description:
      "Premium filet mignon, rare to medium, served with creamy mushroom risotto and truffle oil drizzle.",
    category: "MAIN",
    price: 245,
    intensity: "Bold",
    image:
      "https://images.squarespace-cdn.com/content/v1/5be71f2a7c93275d254fa558/1557719488639-2ODK4H6SW2BR4IJ882UH/fullsizeoutput_5465.jpg?format=2500w",
    ingredients: ["Filet Mignon", "Arborio Rice", "Mushrooms", "Truffle Oil", "Parmesan"],
  },
  // DESSERTS
  {
    id: "7",
    itemName: "Crème Brûlée",
    description:
      "Silky smooth vanilla custard topped with caramelized sugar, served chilled with fresh berries.",
    category: "DESSERT",
    price: 85,
    intensity: "Mild",
    image:
      "https://i.pinimg.com/736x/26/50/94/2650949dbac59547bc807f9483273369.jpg",
    ingredients: ["Heavy Cream", "Egg Yolks", "Vanilla Bean", "Sugar"],
  },
  {
    id: "8",
    itemName: "Chocolate Lava Cake with Vanilla Ice Cream",
    description:
      "Warm chocolate cake with a molten center, served with premium vanilla ice cream and fresh mint.",
    category: "DESSERT",
    price: 95,
    intensity: "Strong",
    image:
      "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg",
    ingredients: ["Dark Chocolate", "Butter", "Eggs", "Vanilla Ice Cream", "Mint"],
  },
  {
    id: "9",
    itemName: "Lemon Posset with Shortbread",
    description:
      "Traditional lemon posset with a sweet and tangy flavor, served with buttery shortbread biscuits.",
    category: "DESSERT",
    price: 75,
    intensity: "Mild",
    image:
      "https://media-cdn2.greatbritishchefs.com/media/zdjd13yw/img25748.whqc_768x512q90fpt427fpl534.jpg",
    ingredients: ["Heavy Cream", "Lemon Juice", "Sugar", "Butter", "Flour"],
  },
];

export default function App() {
  const [items, setItems] = useState<menuItem[]>(predefined);

  const addItem = (item: menuItem) => setItems((prev) => [...prev, item]);
  const removeItem = (id: string) =>
    setItems((prev) => prev.filter((i) => i.id !== id));

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
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTintColor: "#D4AF37",
          headerTitleStyle: { fontWeight: "800" },
        }}
      >
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="HomeScreen" options={{ title: "Chef Christoffel's Kitchen" }}>
          {(props) => (
            <HomeScreen
              {...props}
              items={items}
              removeItem={removeItem}
              averages={{
                STARTER: avg("STARTER"),
                MAIN: avg("MAIN"),
                DESSERT: avg("DESSERT"),
              }}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="AddItemScreen" options={{ title: "Add New Item" }}>
          {(props) => <AddItemScreen {...props} addItem={addItem} />}
        </Stack.Screen>

        <Stack.Screen name="Filter" options={{ title: "Filter Menu" }}>
          {(props) => <FilterScreen {...props} items={items} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}