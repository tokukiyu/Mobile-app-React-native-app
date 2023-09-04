import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonHeader() {
  return (
    <View style={{ backgroundColor: "#F4CE14" }}>
      <Text style={{ padding: 16,textAlign:"center", fontSize: 30, color: "black" }}>
        Little Lemon
      </Text>
    </View>
  );
}
