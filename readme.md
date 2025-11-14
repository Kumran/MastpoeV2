Changelog

New features

Home screen now displays the average price per course (Starters, Mains, Desserts).
New Filter screen added so guests can view menu items by course (All / Starters / Mains / Desserts).
Edit Menu remains a separate screen (EditMenu) — chefs can add, edit and remove dishes from this screen only.
All menu items are stored in an array (dishes in DataContext) and persisted to AsyncStorage (@christoffel_dishes_v1).
Refactor & improvements

Broke screens into multiple files (HomeScreen, MenuScreen, EditMenuScreen, FilterScreen, DishDetailsScreen) to improve code organization.
Moved global data into AppProvider (AuthContext + DataContext) to centralize state and persistence.
Reused DishCard component across screens to avoid duplication.
Added helper logic in HomeScreen to compute averages using useMemo for performance.
Files changed / added

Modified: src/screens/HomeScreen.tsx
Added: src/screens/FilterScreen.tsx
Modified: App.tsx (added Filter tab)
Modified: src/types.ts (added Filter to MainTabParamList)
Minor errors

quick fixed tsonfig.json

All done [2025-11-10]

storing dishes in array

changed code so that if no dishes load u will get error message
added sample dishes
removed the added code and sample dishes as it did not comply with the poe
all done [2025-11-11]

redid my code 
did code comments
[2025-11-14]