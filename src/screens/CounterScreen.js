import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase_count':
      return {...state, counter: state.counter + action.payload};
    case 'decrease_count':
      return {...state, counter: state.counter + action.payload};
    default:
     return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0})
  const { counter } = state;

  return <View>
    <Button title="increase" onPress={() => dispatch({type: 'increase_count', payload: 1})
    }/>
    <Button title="decrease" onPress={() => dispatch({type: 'increase_count', payload: -1})
    } />
      <Text>Current Count: {counter}</Text>
  </View>
};

const styles = StyleSheet.create({})

export default CounterScreen;
