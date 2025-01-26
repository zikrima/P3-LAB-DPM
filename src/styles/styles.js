import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header/';

const HomeScreen = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Component Mounted');
    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log(`Counter updated: ${counter}`);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Header title="Home Screen" />
      <Text style={styles.counterText}>Counter: {counter}</Text>
      <Button title="Increase Counter" onPress={() => setCounter(counter + 1)} />
      <Button title="Reset Counter" onPress={() => setCounter(0)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    fontSize: 24,
    marginVertical: 20,
  },
});

export default HomeScreen;
