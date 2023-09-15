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