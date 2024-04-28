import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const cosmeticsData = [
  { id: 1, name: 'Lipstick', price: 10 },
  { id: 2, name: 'Foundation', price: 15 },
  { id: 3, name: 'Mascara', price: 12 },
  { id: 4, name: 'Eyeshadow Palette', price: 20 },
  { id: 5, name: 'Blush', price: 8 },
];

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [buyItems, setBuyItems] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const placeOrder = () => {
    setBuyItems(cartItems);
    setCartItems([]);
    setOrderPlaced(true);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  const renderCosmeticItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => addToCart(item)}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cosmetics Shop</Text>
      <FlatList
        data={cosmeticsData}
        renderItem={renderCosmeticItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={styles.cartButton} onPress={placeOrder}>
        <Text style={styles.cartButtonText}>Place Order</Text>
      </TouchableOpacity>
      {orderPlaced && <Text style={styles.orderPlacedMessage}>Your order is placed!</Text>}
      <Text style={styles.cartHeader}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.buyHeader}>Buy Order</Text>
      <FlatList
        data={buyItems}
        renderItem={({ item }) => (
          <View style={styles.cartItemContainer}>
            <Text style={styles.cartItemName}>{item.name}</Text>
            <Text style={styles.cartItemPrice}>${item.price}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6E6FA',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6a0dad',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
  },
  itemName: {
    fontSize: 18,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cartButton: {
    backgroundColor: '#6a0dad',
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  cartButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  orderPlacedMessage: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    color: '#333',
    fontSize: 16,
  },
  cartHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#6a0dad',
    textAlign: 'center',
  },
  cartItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  cartItemName: {
    fontSize: 16,
    color: '#333',
  },
  cartItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buyHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    color: '#6a0dad',
    textAlign: 'center',
  },
});

export default App;
