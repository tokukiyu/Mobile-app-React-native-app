import * as React from "react";
import { View, Text } from 'react-native';

// Import a local component here
import LittleLemonHeader from "./components/LittleLemonHeader";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#495E57",
        justifyContent: "center", // Center content vertically
        alignItems: "center",     // Center content horizontally
      }}
    >
     <LittleLemonHeader />
    </View>
  );
}
