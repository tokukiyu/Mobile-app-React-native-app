import * as React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../img/LittleLemonLogo.png")}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </View>
  );
};
