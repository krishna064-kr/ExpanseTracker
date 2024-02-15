import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Button = ({
  text,
  bgcolor = '#7F3DFF',
  textColor = '#fff',
  navigate,
}: any) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: bgcolor}]}
        onPress={() => navigation.navigate(navigate)}>
        <Text style={[styles.text, {color: textColor}]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 343,
    borderRadius: 16,
    margin: 10,
    padding: 8,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
