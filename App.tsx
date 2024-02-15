import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {
//   ForgotPassword,
//   Home,
//   Login,
//   LoginSignup,
//   Onboarding,
//   SignUp,
//   Verification,
// } from './src/screens';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AppNavigator from './src/navigators/AppNavigator';

// const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Track Your Expanses</Text>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <AppNavigator />
    </View>
    // <NavigationContainer>
    //   <Stack.Navigator
    //     screenOptions={{
    //       headerShown: false,
    //     }}>
    //     {<Stack.Screen name="Onboarding" component={Onboarding} />}
    //     <Stack.Screen name="Home" component={Home} />
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="LoginSignup" component={LoginSignup} />
    //     <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    //     <Stack.Screen name="Verification" component={Verification} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7F3DFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: '700',
    color: '#fff',
  },
});
