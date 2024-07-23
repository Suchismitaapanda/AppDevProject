import React, { useState } from 'react';
import { SafeAreaView, ImageBackground, StyleSheet } from 'react-native';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import CategorySelection from './components/CategorySelection';
import ProductCard from './components/ProductCard';
import background from './background.jpeg';

const App = () => {
  const [page, setPage] = useState('GettingStarted');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [storedUsername, setStoredUsername] = useState('');
  const [storedPassword, setStoredPassword] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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
          image: require('./watch1.jpeg'),
          category: 'Luxury'
        },
        {
          id: '2',
          title: 'CASIO',
          description: 'Description of CASIO.',
          price: 11000.99,
          discount: 10.00,
          image: require('./watch2.jpeg'),
          category: 'Luxury'
        },
        {
          id: '3',
          title: 'Titan',
          description: 'Description of Titan.',
          price: 8000.00,
          discount: 8.00,
          image: require('./watch3.jpeg'),
          category: 'Simple'
        },
        {
          id: '4',
          title: 'FASTTRACK',
          description: 'Description of FASTTRACK.',
          price: 7500.00,
          discount: 6.00,
          image: require('./watch4.jpeg'),
          category: 'Simple'
        },
        {
          id: '5',
          title: 'ROLEX',
          description: 'Description of ROLEX.',
          price: 8000.00,
          discount: 5.00,
          image: require('./watch5.jpeg'),
          category: 'Simple'
        },
        {
          id: '6',
          title: 'DIOR',
          description: 'Description of DIOR.',
          price: 13000.00,
          discount: 7.00,
          image: require('./watch6.jpeg'),
          category: 'Luxury'
        },
        {
          id: '7',
          title: 'GUCCI',
          description: 'Description of GUCCI.',
          price: 15000.00,
          discount: 5.00,
          image: require('./watch7.jpeg'),
          category: 'Luxury'
        },
        {
          id: '8',
          title: 'TIMEX',
          description: 'Description of TIMEX.',
          price: 6000.00,
          discount: 9.00,
          image: require('./watch8.jpeg'),
          category: 'Simple'
        }
      ];
      setProducts(productData);
      setLoading(false);
      setPage('Category');
    }, 2000);
  };

  return (
    <ImageBackground source={background} style={styles.backgroundImage}>
      <SafeAreaView style={styles.safeArea}>
        {page === 'GettingStarted' && <GettingStarted setPage={setPage} />}
        {page === 'Signup' && (
          <Signup
            username={username}
            password={password}
            email={email}
            setUsername={setUsername}
            setPassword={setPassword}
            setEmail={setEmail}
            handleSignup={handleSignup}
          />
        )}
        {page === 'Login' && (
          <Login
            username={username}
            password={password}
            setUsername={setUsername}
            setPassword={setPassword}
            handleLogin={handleLogin}
          />
        )}
        {page === 'Welcome' && (
          <Welcome
            username={storedUsername}
            handleGetProducts={handleGetProducts}
            handleLogout={handleLogout}
          />
        )}
        {page === 'Category' && <CategorySelection setPage={setPage} />}
        {page === 'Luxury' && <ProductCard products={products.filter(product => product.category === 'Luxury')} username={storedUsername} loading={loading} handleLogout={handleLogout} />}
        {page === 'Simple' && <ProductCard products={products.filter(product => product.category === 'Simple')} username={storedUsername} loading={loading} handleLogout={handleLogout} />}
      </SafeAreaView>
    </ImageBackground>
  );
};

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
});

export default App;
