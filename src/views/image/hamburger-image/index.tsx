import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const HamburgerImage = () => {
  const styles = StyleSheet.create({
    main: {
      position: 'relative',
    },
    hamburger0: {
      position: 'absolute',
      width: 190,
      height: 190,
      left: 30,
      top: 85,
    },
    hamburger1: {
      position: 'absolute',
      width: 130,
      height: 130,
      left: 65,
      top: 37,
      transform: [{rotate: '15deg'}],
    },
  });

  return (
    <View style={styles.main}>
      <Image
        style={styles.hamburger0}
        source={require('./hamburger0.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.hamburger1}
        source={require('./hamburger1.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export const FinishedHamburgerImage = () => {
  const styles = StyleSheet.create({
    main: {
      position: 'relative',
    },
    hamburger0: {
      position: 'absolute',
      width: 100,
      height: 100,
      top: 20,
    },
    hamburger1: {
      position: 'absolute',
      width: 80,
      height: 80,
      left: 14,
      top: 20,
      transform: [{rotate: '15deg'}],
    },
  });

  return (
    <View style={styles.main}>
      <Image
        style={styles.hamburger0}
        source={require('./hamburger0.png')}
        resizeMode="contain"
      />
      <Image
        style={styles.hamburger1}
        source={require('./hamburger1.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default HamburgerImage;
