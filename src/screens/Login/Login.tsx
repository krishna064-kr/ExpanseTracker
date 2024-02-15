import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Button from '../../components/button/Button';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header/Header';
const Login = () => {
  const navigation = useNavigation();
  const [LoginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView>
      <Header text="Login" />
      <TextInput
        style={styles.input}
        onChangeText={(email): string =>
          setLoginInfo({...LoginInfo, email: email})
        }
        value={LoginInfo.email}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password): string =>
          setLoginInfo({...LoginInfo, password: password})
        }
        value={LoginInfo.password}
        placeholder="Password"
      />
      <Button
        text="Login"
        bgcolor="#7F3DFF"
        textColor="#fff"
        navigate="BottomNavigator"
      />
      <View style={{alignItems: 'center'}}>
        <Text
          style={{
            color: '#7F3DFF',
            fontSize: 21,
            fontWeight: '500',
            marginVertical: 18,
          }}
          onPress={() => navigation.navigate('ResetPassword')}>
          Forgot Password?
        </Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: 'gray'}}>
          Don't have an account yet?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#7F3DFF',
                fontSize: 18,
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#7F3DFF',
    borderRadius: 16,
    height: 56,
    margin: 18,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 24,
    color: '#dac7fc',
  },
});

export default Login;
