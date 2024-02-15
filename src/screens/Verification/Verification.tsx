import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../../components/header/Header';

const Verification = () => {
  const [password, setPassword] = useState([]);
  //   const onChangeText = () => {
  //     setPassword([...password].push())
  //   };
  return (
    <SafeAreaView>
      <Header text="Verification" />
      <View>
        <Text style={styles.text}>Enter your {'\n'}Verification Code</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={val => setPassword([...password].push(val))}
          value={password[0]}
          keyboardType="numeric"
        />
      </View>
    </SafeAreaView>
  );
};

export default Verification;

const styles = StyleSheet.create({
  text: {
    marginTop: 80,
    fontSize: 36,
    fontWeight: '500',
  },
  input: {
    height: 40,
    margin: 12,
    width: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

// -------------------------------###########################------------------------

// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   View,
//   TouchableOpacity,
//   Text,
//   StyleSheet,
//   Dimensions,
// } from 'react-native';

// const WINDOW_WIDTH = Dimensions.get('window').width;

// const KEYBOARD_WIDTH = WINDOW_WIDTH - 40;

// const keyboardConfig = [
//   {
//     label: '1',
//     value: 1,
//   },
//   {
//     label: '2',
//     value: 2,
//   },
//   {
//     label: '3',
//     value: 3,
//   },
//   {
//     label: '4',
//     value: 4,
//   },
//   {
//     label: '5',
//     value: 5,
//   },
//   {
//     label: '6',
//     value: 6,
//   },
//   {
//     label: '7',
//     value: 7,
//   },
//   {
//     label: '8',
//     value: 8,
//   },
//   {
//     label: '9',
//     value: 9,
//   },
//   {
//     label: 'C',
//     value: 'clear',
//   },
//   {
//     label: '0',
//     value: 0,
//   },
//   {
//     label: '⌫',
//     value: 'remove',
//   },
// ];

// const Key = ({label, value, onPress}) => {
//   const handlePress = () => {
//     onPress({label, value});
//   };

//   return (
//     <TouchableOpacity onPress={handlePress} style={styles.keyView}>
//       <Text style={styles.keyText}>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// const CIRCLE_SIZE = 40;

// const Circle = ({isActive}) => {
//   return <View style={[styles.circle, isActive && styles.circleActive]} />;
// };

// const CODE_LENGTH = 4;

// export default function Verification() {
//   const [code, setCode] = useState('');

//   const handleKeyPress = key => {
//     if (typeof key.value === 'number') {
//       setCode(code + key.value);
//     }

//     if (key.value === 'remove') {
//       setCode(code.slice(0, -1));
//     }

//     if (key.value === 'clear') {
//       setCode('');
//     }
//   };

//   useEffect(() => {
//     if (code.length === CODE_LENGTH) {
//       // NOTE: example right code
//       if (code === '1234') {
//         alert('Success');
//       } else {
//         alert('Wrong code. Try Again');
//       }

//       setCode('');
//     }
//   }, [code]);

//   return (
//     <SafeAreaView>
//       <View style={styles.circles}>
//         {Array(4)
//           .fill()
//           .map((_, index) => (
//             <Circle isActive={code.length > index} key={index} />
//           ))}
//       </View>

//       <Text style={styles.title}>Enter the code</Text>
//       <View style={styles.keyboard}>
//         {keyboardConfig.map(key => (
//           <Key {...key} onPress={handleKeyPress} />
//         ))}
//       </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   title: {
//     paddingBottom: 16,
//     textAlign: 'center',
//     fontSize: 32,
//   },
//   keyboard: {
//     width: KEYBOARD_WIDTH,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignSelf: 'center',
//   },
//   keyView: {
//     width: KEYBOARD_WIDTH / 3,
//     height: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   keyText: {
//     fontSize: 32,
//   },
//   circles: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginVertical: 32,
//   },
//   circle: {
//     width: CIRCLE_SIZE,
//     height: CIRCLE_SIZE,
//     marginHorizontal: 8,
//     borderRadius: CIRCLE_SIZE,
//     backgroundColor: 'grey',
//   },
//   circleActive: {
//     backgroundColor: 'tomato',
//   },
// });
