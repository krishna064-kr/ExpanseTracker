import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import Button from '../../components/button/Button';

const info = [
  {
    img: require('../../../assets/images/onboarding1.png'),
    title: 'Gain total control of your money',
    subtitle: 'Become your own money manager and make every cent count',
  },
  {
    img: require('../../../assets/images/onboarding2.png'),
    title: 'Know where your money goes',
    subtitle:
      'Track your transaction easily,with categories and financial report ',
  },
  {
    img: require('../../../assets/images/onboarding3.png'),
    title: 'Planning ahead',
    subtitle: 'Setup your budget for each category so you in control',
  },
];

// const navigation = useNavigation();

const LoginSignup = () => {
  return (
    <>
      <Swiper
        showsButtons={false}
        dotColor={'#dac7fc'}
        activeDotColor={'#7F3DFF'}
        activeDotStyle={styles.activeDot}
        dotStyle={styles.dot}>
        {info.map((item: any, index: number) => (
          <View style={styles.slide} key={index}>
            <Image source={item.img} />
            <View style={styles.textView}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subtitle}>{item.subtitle}</Text>
            </View>
          </View>
        ))}
      </Swiper>
      <SafeAreaView>
        <View>
          <Button
            text="Sign up"
            bgcolor="#7F3DFF"
            textColor="#fff"
            navigate="SignUp"
          />
          <Button
            text="Login"
            bgcolor="#dac7fc"
            textColor="#7F3DFF"
            navigate="Login"
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginSignup;

const styles = StyleSheet.create({
  activeDot: {height: 16, width: 16, borderRadius: 8},
  dot: {height: 10, width: 10, borderRadius: 5},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    marginHorizontal: 47,
  },
  title: {
    fontSize: 32,
    // height: 39,
    alignItems: 'center',
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});
