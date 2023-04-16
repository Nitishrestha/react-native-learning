
import React from 'react';
import EXstyle from './styles/style'

import {
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';
import CompanyData from './components/CompanyData'

const App = () => {
  return (
    <View>
      {/* Style only a particular component inside a single file is internal style */}
      <Text style={{fontSize:30}}>Styles in react native</Text>


      <Text style={style.textBox}>Styles in react native</Text>
      <Text style={EXstyle.textBox2}>Styles in react native</Text>
      <Text style={style.textBox}>Styles in react native</Text>
      <Text style={EXstyle.textBox2}>Styles in react native</Text> 
    </View>
  );
};

const style = StyleSheet.create({
  textBox:{
    color: 'black',
    fontSize:20,
     backgroundColor: 'white',
     marginTop:4,
     textAlign:'center'
  },
  textBox2:{
    color: 'white',
    fontSize:30,
     backgroundColor: 'black',
     marginTop:4
  }
})

export default App;
