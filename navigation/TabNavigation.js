import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import TabBarIcon from "../util/TabBarIcon";
import ProfileScreen from "../screens/ProfileScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import BagScreen from "../screens/BagScreen";

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => (
          <TabBarIcon focused={focused} route={route} />
        ),
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
        tabBarLabelStyle: {
          fontFamily: "MetroMedium",
          fontWeight: "bold",
          fontSize: 14,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Favorites"
        component={FavoritesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="Bag"
        component={BagScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
