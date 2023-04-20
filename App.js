import React from 'react';

import {Text, View, StyleSheet, ScrollView} from 'react-native';

import users from './User';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Grid with dynamic data</Text>
      {/* <View style={style.viewStyle}>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
        <Text style={style.viewText}>Sam</Text>
      </View> */}
      <View style={style.viewStyle}>
        {users.map(user => (
          <Text style={style.viewText}>{user.name}</Text>
        ))}
      </View>
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
  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewText: {
    fontSize: 25,
    backgroundColor: 'grey',
    color: 'white',
    height: 120,
    width: 120,
    margin: 4,
    padding: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  scroll: {
    marginBottom: 100,
  },
});

export default App;
