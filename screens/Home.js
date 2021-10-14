import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <MaterialIcons name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" flex />
        </View>
      </View>
    </View>
  );
}
