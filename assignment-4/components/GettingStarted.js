import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const GettingStarted = ({ setPage }) => (
  <View style={styles.outerContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>
      <Button title="Get Started" onPress={() => setPage('Signup')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#b7e4c7',
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%'
  },
  container: {
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default GettingStarted;
