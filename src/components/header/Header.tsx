import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
const Header = ({text}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerTop}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign size={28} name="arrowleft" />
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.signUpText}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center', // Set background color as per your application's theme
  },
  signUpText: {
    fontSize: 28,
  },
});

export default Header;
