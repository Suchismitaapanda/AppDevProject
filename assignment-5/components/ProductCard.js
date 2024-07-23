import React from 'react';
import { View, Text, Image, FlatList, Button, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

const ProductCard = ({ products, username, loading, handleLogout }) => (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
  <View style={styles.outerContainer}>
    <View style={styles.productContainer}>
      <Text style={styles.title}>Welcome, {username}!</Text>
      <Text style={styles.title}>Watch Brands</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={products}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
              <Text style={styles.cardPrice}>Price: ${item.price}</Text>
              <Text style={styles.cardDiscount}>Discount: ${item.discount}</Text>
            </View>
          )}
        />
      )}
      <Button title="Log Out" onPress={handleLogout} />
    </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  outerContainer: {
    flex: 1,
    backgroundColor: '#1d3557', // Set outer background color to red
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  productContainer: {
    width: '80%',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 20,
    margin: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardDescription: {
    marginVertical: 10,
  },
  cardPrice: {
    fontSize: 16,
    color: 'green',
  },
  cardDiscount: {
    fontSize: 16,
    color: 'red',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});

export default ProductCard;