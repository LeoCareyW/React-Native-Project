import React, { useState } from 'react';
import { View, Text, Button } from 'react-native'

const counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>
      <Text>Current Count: {counter}</Text>
      <button title="increase" onPress={() => {setCounter(counter +1)}} />
      <button title="decrease" onPress={() => {setCounter(counter -1)}} />
    </View>
    )
}

export default Counter
