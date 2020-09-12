import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
const greeting = "Hi there!"
const name = "Leo"

  return (
    <View>
      <Text style={styles.header}> Getting started with React Native! </Text>
      <Text style={styles.textStyle}>My name is {name}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  header: {
    fontSize: 45
  }
});

export default ComponentsScreen
























