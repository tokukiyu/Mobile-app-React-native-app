import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
 const [myJSON, setJsonObj] = useState([]);

 const convertStringToJson = () => {
  const myStr = `[
    {
        "name": "Veggie Kabob",
        "price": "$12",
        "type": "Main Dish"
    },
    {
        "name": "Greek Salad",
        "price": "$7",
        "type": "Side"
    },
    {
        "name": "Black Tea",
        "price": "$3",
        "type": "Drink"
    }
]`;


  const result = JSON.parse(myStr);
  setJsonObj(result);
 };

 useEffect(() => {
  convertStringToJson();
 }, []);

 return (
  <SafeAreaView style={styles.container}>
   <Text style={styles.headerText}>Little Lemon</Text>
   {myJSON &&
    myJSON.map((menuItem) => {
      return (
    <SafeAreaView style={menuStyles.container}>
     <Text style={menuStyles.headerText}>Little Lemon Menu</Text>
     <FlatList
      data={menu}
      keyExtractor={({ id }) => id}
      renderItem={renderItem}
     />
    </SafeAreaView>
   );
  }; 
  
  const menuStyles = StyleSheet.create({
   container: {
    flex: 1,
   },
   innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   itemText: {
    color: '#F4CE14',
    fontSize: 22,
   },
   headerText: {
    color: '#F4CE14',
    fontSize: 30,
    textAlign: 'center',
   },
  });