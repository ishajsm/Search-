import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/LoginScreen';
import Feed from '../screens/Feed';
import AddPost from '../screens/AddPost';
import MainScreen from '../screens/MainScreen';


const Stack = createNativeStackNavigator();


// import HealthAppscreen from '../../screens/Intialscreen';

function AuthStack() {
  return (
    <Stack.Navigator headerMode={"none"} initialRouteName="LoginScreen">
      <Stack.Screen 
      name="LoginScreen"
      component={LoginScreen}
      header={null}
      options={{headerShown:false}}/>
      <Stack.Screen 
      name="Feed"
      component={Feed}
      header={null}
      options={{headerShown:false}}/>
       <Stack.Screen 
      name="AddPost"
      component={AddPost}
      header={null}
      options={{headerShown:false}}/>
          <Stack.Screen 
      name="MainScreen"
      component={MainScreen}
      header={null}
      options={{headerShown:false}}/>
    
  
  

  

 
    </Stack.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          header={null}
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
