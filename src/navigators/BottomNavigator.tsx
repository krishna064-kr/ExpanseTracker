import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Home} from '../screens';
import AddButton from '../components/button/AddButton';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: '#7F3DFF',
        })}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon(props) {
              return (
                <Ionicons
                  size={28}
                  name="home"
                  color={props.focused ? '#7F3DFF' : '#EEE5FF'}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Transaction"
          component={Home}
          options={{
            tabBarIcon(props) {
              return (
                <Entypo
                  size={28}
                  name="swap"
                  color={props.focused ? '#7F3DFF' : '#EEE5FF'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="add"
          component={Home}
          options={{
            tabBarButton: () => <AddButton />,
          }}
        />
        <Tab.Screen
          name="Budget"
          component={Home}
          options={{
            tabBarIcon(props) {
              return (
                <Fontisto
                  size={28}
                  name="pie-chart-1"
                  color={props.focused ? '#7F3DFF' : '#EEE5FF'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarIcon(props) {
              return (
                <Ionicons
                  size={28}
                  name="person"
                  color={props.focused ? '#7F3DFF' : '#EEE5FF'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default BottomNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
