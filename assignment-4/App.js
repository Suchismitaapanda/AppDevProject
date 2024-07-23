import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground } from 'react-native';
import background from './background.jpeg';
import GettingStarted from './components/GettingStarted';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';

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
        },
        {
          id: '2',
          title: 'CASIO',
          description: 'Description of CASIO.',
          price: 11000.99,
          discount: 10.00,
          image: require('./watch2.jpeg'),
        },
        {
          id: '3',
          title: 'Titan',
          description: 'Description of Titan.',
          price: 8000.00,
          discount: 8.00,
          image: require('./watch3.jpeg'),
        },
        {
          id: '4',
          title: 'FASTTRACK',
          description: 'Description of FASTTRACK.',
          price: 7500.00,
          discount: 6.00,
          image: require('./watch4.jpeg'),
        }
      ];
      setProducts(productData);
      setLoading(false);
      setPage('Product');
    }, 2000);
  };

  return (
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
        }
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;