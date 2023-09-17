import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Appetizers");
  const [searchQuery, setSearchQuery] = useState("");

  const getMenu = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/menu-items-by-category.json"
      );
      const json = await response.json();
      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMenu();
  }, []);

  // Filter data based on selected category and search query
  const filteredData = data.filter(
    (item) =>
      item.category.title === selectedCategory &&
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const Item = ({ name, price }) => (
    <View style={menuStyles.innerContainer}>
      <Text style={menuStyles.itemText}>{name}</Text>
      <Text style={menuStyles.itemText}>{"$" + price}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item name={item.title} price={item.price} />
  );

  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>

      {/* Search bar */}
      <TextInput
        style={menuStyles.searchInput}
        placeholder="Search for menu items"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      {/* Category selection buttons */}
      <View style={menuStyles.categoryButtons}>
        <TouchableOpacity
          style={[
            menuStyles.categoryButton,
            selectedCategory === "Appetizers" &&
              menuStyles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory("Appetizers")}
        >
          <Text
            style={[
              menuStyles.categoryButtonText,
              selectedCategory === "Beverages" &&
                menuStyles.selectedCategoryButtonText,
            ]}
          >
            Appetizers
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            menuStyles.categoryButton,
            selectedCategory === "Salads" && menuStyles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory("Salads")}
        >
          <Text
            style={[
              menuStyles.categoryButtonText,
              selectedCategory === "Beverages" &&
                menuStyles.selectedCategoryButtonText,
            ]}
          >
            Salads
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            menuStyles.categoryButton,
            selectedCategory === "Beverages" &&
              menuStyles.selectedCategoryButton,
          ]}
          onPress={() => setSelectedCategory("Beverages")}
        >
          <Text
            style={[
              menuStyles.categoryButtonText,
              selectedCategory === "Beverages" &&
                menuStyles.selectedCategoryButtonText,
            ]}
          >
            Beverages
          </Text>
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={filteredData}
          keyExtractor={({ id }, index) => id.toString()} // Use toString() to ensure key is a string
          renderItem={renderItem}
        />
      )}
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
    backgroundColor: "#495E57",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    color: "#F4CE14",
    fontSize: 22,
  },
  headerText: {
    color: "#495E57",
    fontSize: 30,
    textAlign: "center",
  },
  searchInput: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#EDEDED",
    borderRadius: 5,
  },
  categoryButtons: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    backgroundColor: "#495E57",
    borderRadius: 5,
  },
  selectedCategoryButton: {
    backgroundColor: "#F4CE14",
  },
  selectedCategoryButtonText: {
    color: "#FFF",
  },
  categoryButtonText: {
    color: "#F4CE14",
  },
});
