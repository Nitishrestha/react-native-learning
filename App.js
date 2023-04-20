import React from 'react';

import {Text, View, StyleSheet, ScrollView} from 'react-native';

const App = () => {
  const users = [
    {
      id: 1,
      name: 'Nitish',
    },
    {
      id: 2,
      name: 'Madhu',
    },
    {
      id: 3,
      name: 'Satish',
    },
    {
      id: 4,
      name: 'Prabin',
    },
    {
      id: 5,
      name: 'Avinash',
    },
    {
      id: 6,
      name: 'Sumin',
    },
    {
      id: 7,
      name: 'Rohan',
    },
    {
      id: 8,
      name: 'John',
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 30}}>List with map function in react native</Text>
      <ScrollView style={style.scroll}>
        {users.map(user => (
          <Text style={style.item}>{user.name}</Text>
        ))}
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  item: {
    color: 'black',
    fontSize: 20,
    backgroundColor: 'white',
    marginTop: 4,
    height: 120,
    textAlign: 'center',
  },
  scroll: {
    marginBottom: 80,
  },
});

export default App;
