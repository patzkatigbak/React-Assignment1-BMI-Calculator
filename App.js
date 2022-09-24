import { StyleSheet, Text, View, TextInput, Button, Switch} from 'react-native';
import React, {useState} from 'react';

export default function App() {
const [value, setValue] = React.useState('');
const [isEnabled, setIsEnabled] = React.useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View 
        style={[styles.container,isEnabled ? {backgroundColor:'black' } : {backgroundColor:'white'} ]}>

      

      <Text style={styles.textViewStatic}>Input Text below</Text>

      <TextInput style={styles.edit}
          clearTextFocus = 'true'
          onChangeText = {text => setValue(text)}>
      </TextInput>

      <Text 
          style={styles.textViewOutput}>{value}
      </Text>

      <Button 
          title='Clear Output' 
          onPress={() => setValue('')}>
      </Button>

      <Switch 
          onValueChange={toggleSwitch}
          trackColor={{false: 'red', true: 'gray'}}
          thumbColor={isEnabled ? 'orange' : 'green'}
          value={isEnabled}>
      </Switch>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent: 'center'
  },
  edit:{
    borderWidth: 2,
    borderColor:'orange',
    width:'90%',
    color:'blue'
  },
  textViewStatic:{
    fontSize: 22,
    color: "red"
  },
  textViewOutput:
  {
    color: 'blue'
  }
});