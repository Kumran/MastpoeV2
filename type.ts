//Code attributions//
//Author:w3schools//
//Title:typescript//
//Date punlished:Copyright 1999-2025//
//Link:https://www.w3schools.com/typescript/index.php //
//Date accessed:2025/11/10//

export type Course= "STARTER" | "MAIN"| "DESSERT";

export type menuItem={
id : string;
itemName: string ;
description : string ;
category: string;
price: number;
intensity:"Mild"|"Balanced"| "Strong" | string;
image: string;
ingredients:string[];
};

export type RootStackParamlist={ 
    WelcomeScreen: undefined;
    HomeScreen: undefined;
    AddItemScreen: undefined;
    Filter: {items: menuItem[]};

};