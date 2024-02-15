import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const DotComponent = ({selected}: boolean) => {
  return (
    <View style={[styles.dots, selected ? {backgroundColor: '#7F3DFF'} : '']}>
      <View style={styles.dott}></View>
    </View>
  );
};

export default DotComponent;
const styles = StyleSheet.create({
  dots: {
    borderRadius: 8,
    height: 16,
    width: 16,
    marginHorizontal: 5,
    backgroundColor: '#c5a9fc',
  },
  dot: {
    borderRadius: 5,
    height: 10,
    width: 10,
  },
});
