import React from "react";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
/* import { MaterialCommunityIcons } from "@expo/vector-icons"; */

export default function Login({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <Image //Image and styles
        style={{
          width: 200,
          height: 200,
          borderRadius: "20px",
          marginBottom: 20,
          transform: [{ rotate: "45deg" }],
          marginBottom: 50,
        }}
        source={require("../assets/login_bike.png")}
      />

      <Text style={{ color: "rgba(0,0,0,0.8)", fontSize: 24 }}>Welcome to</Text>
      <Text style={{ fontSize: 30, color: "black", fontWeight: 600 }}>
        Power Bike Shop
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#e3e3e3",
          flexDirection: "row",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
        }}
      >
        {/* <MaterialCommunityIcons name="gmail" size={24} color="black" /> */}
        <AntDesign name="google" size={24} color="rgb(256,100,10)" />
        <Text style={{ fontSize: 20, marginLeft: 10 }}>Login With Gmail</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          backgroundColor: "black",
          flexDirection: "row",
          padding: 10,
          paddingHorizontal: 60,
          marginTop: 20,
          borderRadius: 10,
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ fontSize: 20, color: "white", marginLeft: 10 }}>
          Login With Apple
        </Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <Text
          style={{
            fontSize: 20,
            color: "grey",
            fontWeight: "500",
            marginTop: 20,
          }}
        >
          Not a Member?
          <Text style={{ color: "orange", fontWeight: "100" }}>Sign Up</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
