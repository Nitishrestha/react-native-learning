import React, {useState} from 'react';

import {Text, TextInput, View, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');

  return (
    <View>
      <Text style={{fontSize: 30}}>Handle Text Input</Text>
      <TextInput
        placeholder=" enter your name"
        style={styles.textInput}
        onChangeText={text => setName(text)}
        value={name}></TextInput>
      <Text>Your name is : {name}</Text>
      <Button title="Clear" onPress={() => setName('')}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'green',
    borderWidth: 2,
    borderColor: 'blue',
    margin: 10,
  },
});

export default App;
