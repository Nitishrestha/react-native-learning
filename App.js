import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

import user from './User';

const App = () => {
  return (
    <View>
      <Text style={style.textBox}>This is the main page</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textBox: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'white',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default App;
