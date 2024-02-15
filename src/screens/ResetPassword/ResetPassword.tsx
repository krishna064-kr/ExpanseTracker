import {TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';

const ResetPassword = () => {
  const [LoginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView>
      <Header text="Reset Password" />
      <TextInput
        style={[styles.input]}
        onChangeText={(email): string =>
          setLoginInfo({...LoginInfo, email: email})
        }
        value={LoginInfo.email}
        placeholder="New Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password): string =>
          setLoginInfo({...LoginInfo, password: password})
        }
        value={LoginInfo.password}
        placeholder="Retype new Password"
      />
      <Button
        text="Continue"
        bgcolor="#7F3DFF"
        textColor="#fff"
        navigate="BottomNavigator"
      />
    </SafeAreaView>
  );
};

export default ResetPassword;

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
