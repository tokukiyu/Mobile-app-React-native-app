import * as React from "react";
import { View, Text } from "react-native";

export default function LittleLemonFooter() {
  return (
    <View
      style={{
        backgroundColor: "#F4CE14",
        position: "absolute",
        bottom: 0,
        left: 0,
        marginBottom: 2,
        right: 0,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "black",
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
