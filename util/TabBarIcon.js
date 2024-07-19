import React from "react";
import { Image } from "react-native";

const icon = {
  Home: {
    active: require("../assets/icon/home-activated.png"),
    inactive: require("../assets/icon/home-inactive.png"),
  },
  Profile: {
    active: require("../assets/icon/profil-activated.png"),
    inactive: require("../assets/icon/profil-inactive.png"),
  },
  Favorites: {
    active: require("../assets/icon/favorites-activated.png"),
    inactive: require("../assets/icon/favorites-inactive.png"),
  },
  Bag: {
    active: require("../assets/icon/bag-activated.png"),
    inactive: require("../assets/icon/bag-inactive.png"),
  },
};

const TabBarIcon = ({ focused, route }) => {
  let iconName = focused ? icon[route.name].active : icon[route.name].inactive;

  return <Image source={iconName} style={{ width: 40, height: 40 }} />;
};

export default TabBarIcon;
