import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  return (
    <View>
    <Text>Please enter password</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(newText) => setName(newText)}
      />
    { name.length < 6 ? <Text style={styles.error}>Password is too short</Text> : null }
  </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2
  },
  error: {
    color: 'red',
    fontSize: 15
  }
})

export default TextScreen
