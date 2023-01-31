// screens/ProductDetailScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AsyncStorage } from 'react-native';
import { getProduct } from '../actions/product';

const ProductDetailScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  useEffect(() => {
    const loadProduct = async () => {
      const product = await AsyncStorage.getItem(productId);
      if (product) {
        setProduct(JSON.parse(product));
      } else {
        dispatch(getProduct(productId));
      }
    };
    loadProduct();
  }, [dispatch, productId]);

  return (
    <View style={styles.container}>
     <Text style={styles.type}>{product.type}</Text>
        <Text style={styles.weight}>{product.weight}</Text>
        <Text style={styles.power}>{product.power}</Text>
        <Text style={styles.manufacturingdate}>{product.manufacturingdate}</Text>
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

export default ProductDetailScreen;
