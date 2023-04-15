
import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import CompanyData from './components/CompanyData'

const App = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>React-native file structure</Text>
      <Button title='Save' onPress={save}></Button>
      <Text>Line Breaker</Text>
      <Button title='Delete' onPress={()=> delet()}></Button>
      <CompanyData/>
      <Text></Text>
      <UserDetail/>
    </View>
  );
};

const save = () => {
  console.warn('save called')
}

const delet = () => {
  console.warn('delete called')
}

const UserDetail = () => {
  return(
    <View>
      <Text style={{fontSize:30}}> Name: Nitish</Text>
      <Text style={{fontSize:30}}> Age: 30</Text>
      <Text style={{fontSize:30}}> Email: Nitishrestha8848@gmail.com</Text>
    </View>
  )

}

export default App;
