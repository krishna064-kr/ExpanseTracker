import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({name: '', email: '', password: ''});
  const [isSelected, setSelection] = useState(false);
  console.log(userInfo);

  return (
    <SafeAreaView>
      <Header text="Signup" />
      <TextInput
        style={styles.input}
        onChangeText={(name): string => setUserInfo({...userInfo, name: name})}
        value={userInfo.name}
        placeholder="Name"
      />

      <TextInput
        style={styles.input}
        onChangeText={(email): string =>
          setUserInfo({...userInfo, email: email})
        }
        value={userInfo.email}
        placeholder="Email"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={(password): string =>
          setUserInfo({...userInfo, password: password})
        }
        value={userInfo.password}
        placeholder="Password"
        keyboardType="numeric"
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />

        <Text style={{fontSize: 18, marginLeft: 8}}>
          By signing up, you agree to the{' '}
          <Text style={{color: '#7F3DFF'}}>
            Terms of Service and Privacy Policy
          </Text>
        </Text>
      </View>

      <Button
        text="Sign up"
        bgcolor="#7F3DFF"
        textColor="#fff"
        navigate="Verification"
      />

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, color: 'gray'}}>
          Already have an account?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                textDecorationLine: 'underline',
                color: '#7F3DFF',
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    borderColor: '#7F3DFF',
    borderRadius: 16,
    height: 56,
    margin: 10,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 24,
    color: '#dac7fc',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 18,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    // margin: 8,
  },
});
