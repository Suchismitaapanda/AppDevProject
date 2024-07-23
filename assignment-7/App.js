import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Switch
} from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

// Import your images
import radoImage from './watch1.jpeg';
import casioImage from './watch2.jpeg';
import titanImage from './watch3.jpeg';
import fasttrackImage from './watch4.jpeg';
import rolexImage from './watch5.jpeg';
import diorImage from './watch6.jpeg';
import gucciImage from './watch7.jpeg';
import timexImage from './watch8.jpeg';
import background from './background1.jpeg';

const App = () => {
  const [page, setPage] = useState('GettingStarted');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [storedUsername, setStoredUsername] = useState('');
  const [storedPassword, setStoredPassword] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Step 1: State for dark mode toggle

  const handleSignup = () => {
    setStoredUsername(username);
    setStoredPassword(password);
    setPage('Login');
  };

  const handleLogin = () => {
    if (username === storedUsername && password === storedPassword) {
      setPage('Welcome');
    } else {
      alert('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setPage('GettingStarted');
    setUsername('');
    setPassword('');
  };

  const handleGetProducts = () => {
    setLoading(true);
    setTimeout(() => {
      const productData = [
        {
          id: '1',
          title: 'RADO',
          description: 'Description of RADO.',
          price: 9000.99,
          discount: 5.00,
          image: radoImage,
          category: 'Luxury'
        },
        {
          id: '2',
          title: 'CASIO',
          description: 'Description of CASIO.',
          price: 11000.99,
          discount: 10.00,
          image: casioImage,
          category: 'Luxury'
        },
        {
          id: '3',
          title: 'Titan',
          description: 'Description of Titan.',
          price: 8000.00,
          discount: 8.00,
          image: titanImage,
          category: 'Simple'
        },
        {
          id: '4',
          title: 'FASTTRACK',
          description: 'Description of FASTTRACK.',
          price: 7500.00,
          discount: 6.00,
          image: fasttrackImage,
          category: 'Simple'
        },
        {
          id: '5',
          title: 'ROLEX',
          description: 'Description of ROLEX.',
          price: 8000.00,
          discount: 5.00,
          image: rolexImage,
          category: 'Simple'
        },
        {
          id: '6',
          title: 'DIOR',
          description: 'Description of DIOR.',
          price: 13000.00,
          discount: 7.00,
          image: diorImage,
          category: 'Luxury'
        },
        {
          id: '7',
          title: 'GUCCI',
          description: 'Description of GUCCI.',
          price: 15000.00,
          discount: 5.00,
          image: gucciImage,
          category: 'Luxury'
        },
        {
          id: '8',
          title: 'TIMEX',
          description: 'Description of TIMEX.',
          price: 6000.00,
          discount: 9.00,
          image: timexImage,
          category: 'Simple'
        }
      ];
      setProducts(productData);
      setLoading(false);
      setPage('Category');
    }, 2000);
  };

  const addToFavorites = (product) => {
    setFavoriteProducts([...favoriteProducts, product]);
  };

  const removeFromFavorites = (productId) => {
    const updatedFavorites = favoriteProducts.filter((product) => product.id !== productId);
    setFavoriteProducts(updatedFavorites);
  };

  const isFavorite = (productId) => {
    return favoriteProducts.some((product) => product.id === productId);
  };

  const renderGettingStartedPage = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Getting Started</Text>
      <Button title="Get Started" onPress={() => setPage('Signup')} />
    </View>
  );

  const renderSignupPage = () => (
    <Signup
      username={username}
      password={password}
      email={email}
      setUsername={setUsername}
      setPassword={setPassword}
      setEmail={setEmail}
      handleSignup={handleSignup}
    />
  );

  const renderLoginPage = () => (
    <Login
      username={username}
      password={password}
      setUsername={setUsername}
      setPassword={setPassword}
      handleLogin={handleLogin}
    />
  );

  const renderWelcomePage = () => (
    <Welcome
      username={storedUsername}
      handleGetProducts={handleGetProducts}
      handleLogout={handleLogout}
      handleNavigateToFavorites={() => setPage('Favorites')}
    />
  );

  const renderCategoryPage = () => (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Category</Text>
      <Button title="Luxury Watches" onPress={() => setPage('Luxury')} />
      <Button title="Simple Watches" onPress={() => setPage('Simple')} />
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );

  const renderProductPage = (category) => (
    <ScrollView contentContainerStyle={styles.scrollViewContent} style={{ backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <View style={styles.productContainer}>
        <Text style={styles.title}>Choose a Category</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
          <Text style={{ marginRight: 10 }}>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={(newValue) => setIsDarkMode(newValue)} />
        </View>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={products.filter((product) => product.category === category)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <TouchableOpacity onPress={() => isFavorite(item.id) ? removeFromFavorites(item.id) : addToFavorites(item)} style={styles.favoriteButton}>
                  <FontAwesome name={isFavorite(item.id) ? 'heart' : 'heart-o'} size={30} color={isFavorite(item.id) ? 'red' : 'black'} />
                </TouchableOpacity>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDescription}>{item.description}</Text>
                <Text style={styles.cardPrice}>Price: ${item.price}</Text>
                <Text style={styles.cardDiscount}>Discount: ${item.discount}</Text>
              </View>
            )}
          />
        )}
        <Button title="Go to Welcome" onPress={() => setPage('Welcome')} />
      </View>
    </ScrollView>
  );

  const renderFavoritesPage = () => (
    <Favorites
      favoriteProducts={favoriteProducts}
      handleCategory={() => setPage('Category')}
      removeFromFavorites={removeFromFavorites}
    />
  );

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeArea}>
        {page === 'GettingStarted' && renderGettingStartedPage()}
        {page === 'Signup' && renderSignupPage()}
        {page === 'Login' && renderLoginPage()}
        {page === 'Welcome' && renderWelcomePage()}
        {page === 'Category' && renderCategoryPage()}
        {page === 'Luxury' && renderProductPage('Luxury')}
        {page === 'Simple' && renderProductPage('Simple')}
        {page === 'Favorites' && renderFavoritesPage()}
      </SafeAreaView>
    </ImageBackground>
  );
};

const Signup = ({ username, password, email, setUsername, setPassword, setEmail, handleSignup }) => (
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
);

const Login = ({ username, password, setUsername, setPassword, handleLogin }) => (
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
);

const Welcome = ({ username, handleGetProducts, handleLogout, handleNavigateToFavorites }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Welcome, {username}!</Text>
    <Button title="Go to Products" onPress={handleGetProducts} />
    <Button title="Go to Favorites" onPress={handleNavigateToFavorites} />
    <Button title="Log Out" onPress={handleLogout} />
  </View>
);

const Favorites = ({ favoriteProducts, handleCategory, removeFromFavorites }) => (
  <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.productContainer}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favoriteProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <TouchableOpacity onPress={() => removeFromFavorites(item.id)} style={styles.favoriteButton}>
              <FontAwesome name="heart" size={30} color="red" />
            </TouchableOpacity>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
            <Text style={styles.cardPrice}>Price: ${item.price}</Text>
            <Text style={styles.cardDiscount}>Discount: ${item.discount}</Text>
          </View>
        )}
      />
      <Button title="Go to Welcome" onPress={handleCategory} />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:300,
  },
  productContainer: {
    width: '70%', 
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
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    position: 'relative',
    width: '100%', 
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
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  favoriteButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default App;