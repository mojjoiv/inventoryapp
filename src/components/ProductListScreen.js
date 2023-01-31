import React, { useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

const ProductListScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const products = useSelector(state => state.products);
  const dispatch = useDispatch();

  const filteredProducts = products.filter(product => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <View>
      <TextInput
        placeholder="Search"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={item => item.id}
        renderItem={({ products }) => (
          <View>
             <Text style={styles.type}>{products.type}</Text>
        <Text style={styles.weight}>{products.weight}</Text>
        <Text style={styles.power}>{products.power}</Text>
        <Text style={styles.manufacturingdate}>{products.manufacturingdate}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ProductListScreen;
