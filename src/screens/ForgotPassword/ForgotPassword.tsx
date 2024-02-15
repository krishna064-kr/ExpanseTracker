import {StyleSheet, Text, SafeAreaView, View, TextInput} from 'react-native';
import React from 'react';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';

const ForgotPassword = () => {
  return (
    <SafeAreaView>
      <Header text="Forgot Password" />
      <View style={styles.container}>
        <Text style={styles.text}>
          Don’t worry.{'\n'}
          Enter your email and we’ll send you a link to reset your password.
        </Text>
        <TextInput style={styles.input} value={'Email'} placeholder="Name" />
        <Button text="Continue" navigate="ForgotPassword" />
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  text: {
    marginTop: 80,
    fontSize: 24,
    fontWeight: '600',
    lineHeight: 32, // Adjust line height for better readability
  },
  input: {
    borderColor: '#7F3DFF',
    borderRadius: 16,
    height: 56,
    marginVertical: 30,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 24,
    color: '#dac7fc',
  },
});
