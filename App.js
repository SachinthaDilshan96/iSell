
import React from 'react';
import type {Node} from 'react';
import {
  StyleSheet,Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react/cjs/react.development';
SplashScreen

import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }){
  return(
    <View>
      <Text>Welcome to Quickly</Text>
      <Button title="All Adds" onPress={() => navigation.navigate('AllAdds')} />
      <Button title="Vehicles"onPress={() => navigation.navigate('Vehicles')} />
      <Button title="Vehicle Spares & Accessories"onPress={() => navigation.navigate('SparesAndAccessories')} />
      <Button title="Properties" onPress={() => navigation.navigate('Properties')} />
      <Button title="Electronics" onPress={() => navigation.navigate('Electronics')} />
      <Button title="Services" onPress={() => navigation.navigate('Services')} />
      </View>
  )
}

function AllAdds(){
  return(
    <View>
    <Text>All Adds</Text>
    </View>
  )
}
function Vehicles(){
  return(
    <View>
    <Text>Vehicles</Text>
    </View>
  )
}
function SparesAndAccessories(){
  return(
    <View>
    <Text>Spares</Text>
    </View>
  )
}

function Properties(){
  return(
    <View>
    <Text>Properties</Text>
    </View>
  )
}

function Electronics(){
  return(
    <View>
    <Text>Electronics</Text>
    </View>
  )
}

function Services(){
  return(
    <View>
    <Text>Services</Text>
    </View>
  )
}

const App: () => Node = () => {
useEffect(()=>{
  SplashScreen.hide();
},[])

 return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AllAdds" component={AllAdds}/>
        <Stack.Screen name="Vehicles" component={Vehicles}/> 
        <Stack.Screen name="SparesAndAccessories" component={SparesAndAccessories}/> 
         <Stack.Screen name="Properties" component={Properties}/> 
          <Stack.Screen name="Electronics" component={Electronics}/> 
           <Stack.Screen name="Services" component={Services}/> 
    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
