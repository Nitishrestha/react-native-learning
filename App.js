import React, {useState} from 'react';

import {Button, Text, View, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);

  const clearDetails = () => {
    setShow(false);
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Form Handle in react native</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Enter username"
        onChangeText={name => setName(name)}
        value={name}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter email"
        onChangeText={email => setEmail(email)}
        value={email}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter Password"
        onChangeText={password => setPassword(password)}
        secureTextEntry={true}
        value={password}
      />

      <Button
        title="Print"
        style={styles.button}
        onPress={() => setShow(true)}
      />
      <Text></Text>
      <Button
        title="Clear"
        style={styles.button}
        onPress={() => clearDetails()}
      />

      {show ? (
        <View>
          <Text style={styles.display}>Name is : {name}</Text>
          <Text style={styles.display}>Email is : {email}</Text>
          <Text style={styles.display}>Password is : {password}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 18,
    color: 'pink',
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
  },
  button: {
    marginBottom: 10,
  },
  display: {
    fontSize: 20,
    color: 'grey',
  },
});

export default App;
