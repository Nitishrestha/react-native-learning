import React from 'react';

import {Text, View} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Styles in react native</Text>
    </View>
  );

  const style = StyleSheet.create({
    textBox: {
      color: 'black',
      fontSize: 20,
      backgroundColor: 'white',
      marginTop: 4,
      textAlign: 'center',
    },
  });
};

export default App;
