import {StyleSheet, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ForgotPassword,
  Home,
  Login,
  LoginSignup,
  Onboarding,
  SetPin,
  SignUp,
  Verification,
} from '../screens';
import BottomNavigator from './BottomNavigator';
import ResetPassword from '../screens/ResetPassword';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Onboarding">
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Verification" component={Verification} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default AppNavigator;
