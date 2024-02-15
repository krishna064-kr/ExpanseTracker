import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  Animated,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AddButton = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [opened, toggleOpened] = useState(false);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: opened ? 1 : 0,
      duration: 300,
      friction: 2,
      useNativeDriver: false,
    }).start();
  }, [opened, animation]);

  const opacity = {
    opacity: animation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 0, 1],
    }),
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableWithoutFeedback
          onPress={() => console.log('clicked')}
          style={styles.addBtn}>
          <View style={{justifyContent: 'center'}}>
            <Animated.View>
              <Ionicons
                size={100}
                name="add-circle-sharp"
                color="#7F3DFF"
                style={styles.addIcon}
              />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    // height: 0,
  },
  box: {
    position: 'relative',
    marginTop: -50,
    marginLeft: -100,
  },
  addBtn: {
    // padding: 10,
    // margin: 10,
  },
  addIcon: {
    position: 'absolute',
  },
  item: {
    position: 'absolute',
    top: 5,
    left: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});

// import React from 'react';

// import {
//   TouchableWithoutFeedback,
//   View,
//   StyleSheet,
//   Image,
//   Animated,
// } from 'react-native';
// // import {COLORS} from '../theme/theme';

// const AddButton = ({opened, toggleOpened}) => {
//   const animation = React.useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     Animated.timing(animation, {
//       toValue: opened ? 1 : 0,
//       duration: 300,
//       friction: 2,
//       useNativeDriver: false,
//     }).start();
//   }, [opened, animation]);

//   const opacity = {
//     opacity: animation.interpolate({
//       inputRange: [0, 0.5, 1],
//       outputRange: [0, 0, 1],
//     }),
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.box}>
//         <TouchableWithoutFeedback>
//           <Animated.View
//             style={[
//               styles.item,
//               opacity,
//               {
//                 transform: [
//                   {
//                     translateX: animation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, -60],
//                     }),
//                   },
//                   {
//                     translateY: animation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, -50],
//                     }),
//                   },
//                 ],
//               },
//             ]}>
//             <View>
//               <Ionicons
//                 size={100}
//                 name="add-circle-sharp"
//                 color="#7F3DFF"
//                 style={styles.addIcon}
//               />
//             </View>
//           </Animated.View>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback>
//           <Animated.View
//             style={[
//               styles.item,
//               opacity,
//               {
//                 transform: [
//                   {
//                     translateY: animation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, -100],
//                     }),
//                   },
//                 ],
//               },
//             ]}>
//             <Ionicons
//               size={100}
//               name="add-circle-sharp"
//               color="#7F3DFF"
//               style={styles.addIcon}
//             />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback>
//           <Animated.View
//             style={[
//               styles.item,
//               opacity,
//               {
//                 transform: [
//                   {
//                     translateX: animation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, 60],
//                     }),
//                   },
//                   {
//                     translateY: animation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: [0, -50],
//                     }),
//                   },
//                 ],
//               },
//             ]}>
//             <Ionicons
//               size={100}
//               name="add-circle-sharp"
//               color="#7F3DFF"
//               style={styles.addIcon}
//             />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//         <TouchableWithoutFeedback
//           onPress={toggleOpened}
//           style={styles.addButton}>
//           <Animated.View
//             style={[
//               styles.addButtonInner,
//               {
//                 transform: [
//                   {
//                     rotate: animation.interpolate({
//                       inputRange: [0, 1],
//                       outputRange: ['0deg', '45deg'],
//                     }),
//                   },
//                 ],
//               },
//             ]}>
//             <Ionicons
//               size={100}
//               name="add-circle-sharp"
//               color="#7F3DFF"
//               style={styles.addIcon}
//             />
//           </Animated.View>
//         </TouchableWithoutFeedback>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     flex: 1,
//     height: 0,
//   },
//   box: {
//     position: 'relative',
//     // width: 60,
//     // height: 60,
//     marginTop: -30,
//   },
//   addButton: {
//     shadowColor: 'gray',
//     shadowOpacity: 0.3,
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//   },
//   addButtonInner: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'blue',
//     width: 60,
//     height: 60,
//     borderRadius: 30,
//   },
//   addButtonIcon: {
//     width: 40,
//     height: 40,
//     tintColor: 'red',
//   },
//   item: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'green',
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//   },
//   itemIcon: {
//     width: 32,
//     height: 32,
//     tintColor: 'yellow',
//   },
//   addIcon: {},
// });

// export default AddButton;
