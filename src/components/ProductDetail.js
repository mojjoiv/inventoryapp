// components/ProductDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetail = ({ product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
      <Text style={styles.type}>{product.type}</Text>
        <Text style={styles.weight}>{product.weight}</Text>
        <Text style={styles.power}>{product.power}</Text>
        <Text style={styles.manufacturingdate}>{product.manufacturingdate}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsContainer: {
    alignItems: 'center',
  },
  type: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  weight: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
  power: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
  manufacturingdate: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 8,
  },
});

export default ProductDetail;
