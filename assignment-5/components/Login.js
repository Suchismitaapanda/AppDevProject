import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = ({ username, password, setUsername, setPassword, handleLogin }) => (
  <View style={styles.outerContainer}>
  <View style={styles.container}>
    <Text style={styles.title}>Login</Text>
    <TextInput
      style={styles.input}
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
    />
    <TextInput
      style={styles.input}
      placeholder="Password"
      secureTextEntry
      value={password}
      onChangeText={setPassword}
    />
    <Button title="Login" onPress={handleLogin} />
  </View>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#0a9396', // Set outer background color to red
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
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default Login;