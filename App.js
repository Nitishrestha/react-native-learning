import React from 'react';

import {FlatList, Text, View, StyleSheet} from 'react-native';

import Exusers from './data';

import styles from './styles';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>List with flat list component</Text>
      <FlatList
        data={Exusers}
        renderItem={({item}) => <Text style={styles.item}> {item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;
