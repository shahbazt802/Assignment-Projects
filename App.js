import React from "react";
import {View} from 'react-native';
import HomeScreen from "./src/screen/HomeScreen";


import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import UploadImages from "./src/screen/UploadImages";


const Stack = createNativeStackNavigator();
const App=()=>{


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:true}} />
        <Stack.Screen name="Uploaded" component={UploadImages} options={{headerShown:false}}/>
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
         
}


export default App;