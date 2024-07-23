import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Signup = ({ username, password, email, setUsername, setPassword, setEmail, handleSignup }) => (
  <View style={styles.outerContainer}>
  <View style={styles.container}>
    <Text style={styles.title}>Sign Up</Text>
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
    <TextInput
      style={styles.input}
      placeholder="Email"
      value={email}
      onChangeText={setEmail}
    />
    <Button title="Sign Up" onPress={handleSignup} />
  </View>
  </View>
);

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#74c69d',
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

export default Signup;