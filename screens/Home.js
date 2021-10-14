import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
export default function Home() {
  const Categories = ["All", "Roadbike", "Mountain", "Urban", "Others +"];
  

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
        <TouchableOpacity activeOpacity={0.7}>
          <Ionicons name="ios-menu-outline" size={24} color="black" />
        </TouchableOpacity>
        <MaterialIcons name="motorcycle" size={24} color="black" />
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" flex />
        </View>
      </View>
      <View>
        <Text style={{ color: "grey", fontSize: 20 }}>
          The World's{" "}
          <Text style={{ color: "orange", fontWeight: "bold", fontSize: 25 }}>
            Best Bike
          </Text>
        </Text>
      </View>
      <Text
        style={{
          color: "black",
          fontSize: 19,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        Categories
      </Text>
      <ScrollView
        horizontal
        showsVerticalScrollIndicator={false}
        style={{ margin: 10 }}
        style={{
          fontSize: 20.0,
        }}
      >
        {Categories.map((category, idx) => {
          return (
            <TouchableOpacity key={idx} activeOpacity={0.8}>
              <Text
                style={{
                  color: "#a4a3a3",
                  fontWeight: "600",
                  fontSize: 20.0,
                  backgroundColor: "#e9e8ed",
                  marginRight: 10,
                  padding: "0.55em",
                  borderRadius: 17,
                }}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
}
