
import React, { useState } from "react";
import { StyleSheet, Text, View , TextInput,Button,Switch} from 'react-native';



export default function App() {


  const [textMetric, setTextMetric] = React.useState("METRIC");
  const [heightStaticText, setHeightStaticText] = React.useState("centimeter");
  const [weightStaticText, setWeightStaticText] = React.useState("kilogram");

  const [bmi, setBmi] = React.useState(0);
  const [height, setHeight] = React.useState();
  const [weight, setWeight] = React.useState();
  const [result, setResult] = React.useState();

  const [isEnabled, setIsEnabled] = React.useState(false);


  //This will be triggered when toggle switch is switched on/off 
  //ON - Metric | OFF - IMPERIAL
  const toggleSwitch = () => 
  {
      let setup = textMetric

      setIsEnabled(previousState => !previousState); 

      if(setup == "METRIC")
      {
          setTextMetric("IMPERIAL")
          setHeightStaticText("inches")
          setWeightStaticText("pound")
          
      }
      else {
          setTextMetric("METRIC")
          setHeightStaticText("centimeter")
          setWeightStaticText("kilogram")
      }

  }

//This will be triggered when button 'Calculate' is clicked
  const calculateBMI = () => {

    let val = 0;
    let bmiInfo = ""
    let setup = textMetric
    setResult(" ")

    if(setup == "METRIC")
    {
          let height2 = height * height;

          val = Number(weight) / Number(height2);
    
          val = val * 10000;
          setBmi(val);
      }
      else {
          let height2 = height * height
          let weightPounds = Number(weight) * 703
          val = Number(weightPounds) / Number(height2);
          setBmi(val)
          setResult("test");
      }
  
    if (val < 18.5) 
    {
          bmiInfo="Underweight = <18.5";
    } 
    else if (val > 18.5 && val <= 24.9) 
    {
          bmiInfo="Normal weight = 18.5–24.9";
    } 
    else if (val > 24.9 && val < 30) 
    {
          bmiInfo="Overweight = 25–29.9";
    } 
    else 
    {
          bmiInfo="Obesity = BMI of 30 or greater";
    }

    setResult(bmiInfo)

  }


  return (
    <View style={styles.container}>

      <Text>Select Measurement System</Text>
      <Switch style={styles.toggleSwitch}
          onValueChange={toggleSwitch}
          value={isEnabled}>
      </Switch>

      <Text style={styles.bmiSetup}>{textMetric}</Text>

      <Text>Input your Height in {heightStaticText}</Text>

      <TextInput 
          style={styles.textinput} 
          placeholder="              "
          clearTextFocus = 'true'
          onChangeText={(vals) => setHeight(vals)}>
      </TextInput>

      <Text>Input your Weight in {weightStaticText}</Text>

      <TextInput 
          style={styles.textinput} 
          placeholder="              "
          clearTextFocus = 'true'
          onChangeText={(val) => setWeight(val)}>
      </TextInput>

      <Button 
          title='Calculate' 
          style={styles.button} 
          onPress={calculateBMI}>
      </Button>

      <Text style={styles.textViewOutput}>{bmi}</Text>
      <Text>{result}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleSwitch:{
    alignItems: 'center',
    marginTop:0,
    marginBottom:0
  },
    bmiSetup:{
    alignItems: 'center',
    marginTop:0,
    marginBottom:60,
    fontWeight:"bold",
    color:"red"
  },
  textinput:{
    height: 40,
    marginBottom: 30,
    color:'black',
    borderWidth:1
},
button:{
  alignItems:'center',
  padding: 20, 
  backgroundColor: '#59cbbd',
  marginTop: 10
},
textViewOutput:
{
  color: 'blue',
  fontSize: 18,
  borderWidth:2,
  alignItems:'center',
  justifyContent: 'center',

}

});
