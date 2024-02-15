import {Image} from 'react-native';
import React from 'react';
import Onboard from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';
import DotComponent from '../../components/onboard/DotComponent';

const Onboarding = () => {
  const navigation = useNavigation();

  return (
    <Onboard
      onSkip={() => navigation.replace('LoginSignup')}
      onDone={() => navigation.replace('LoginSignup')}
      DotComponent={DotComponent}
      pages={[
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../../assets/images/onboarding1.png')} />
          ),
          title: 'Gain total control of your money',
          subtitle: 'Become your own money manager and make every cent count',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../../assets/images/onboarding2.png')} />
          ),
          title: 'Know where your money goes',
          subtitle:
            'Track your transaction easily,with categories and financial report ',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../../../assets/images/onboarding3.png')} />
          ),
          title: 'Planning ahead',
          subtitle: 'Setup your budget for each category so you in control',
        },
      ]}
    />
  );
};

export default Onboarding;
