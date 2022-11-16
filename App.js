import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Main from './screens/main'
import background from './images/attachment.png'
import React from 'react'
const Stack = createNativeStackNavigator()

const Started = (props)=>{

  const onpress = ()=>{
    props.navigation.navigate('main')
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={background}  resizeMode = 'stretch' style = {styles.image}>

        <TouchableOpacity style = {styles.button} onPress = {onpress}>
          <Text style = {styles.text}> Get started </Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer style = {styles.container}>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name = 'started' component={Started} />
        <Stack.Screen name = 'main' component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'black',
  },
  image:{
    flex:1, 
    alignItems:'center',
  },
  button:{
    position:'absolute',
    bottom:0,
    marginBottom: 16,
    width:'90%',
    height:48,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black',
    borderRadius:10,
  },
  text:{
    fontSize:18,
    color:'white',
    fontWeight:'bold'
  }
});
