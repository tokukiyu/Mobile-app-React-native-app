import * as React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";

export default function WelcomeScreen ({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./img/littleLemonHeader.png")}
      />
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => navigation.navigate("menu")}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
    logo: {
      height: 100,
      width: 300,
      resizeMode: 'contain',
    },
    container: {
      flex: 1,
      padding: 24,
      marginTop: 25,
      backgroundColor: '#fff',
    },
  
    title: {
      marginTop: 16,
      paddingVertical: 10,
      color: '#333333',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });