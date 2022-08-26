import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const CoffeeImage = () => {
  const styles = StyleSheet.create({
    main: {
      position: 'relative',
    },
    coffee0: {
      position: 'absolute',
      width: 200,
      height: 200,
      left: 40,
      top: 77,
      transform: [{rotate: '20deg'}],
    },
    coffee1: {
      position: 'absolute',
      width: 170,
      height: 170,
      left: 40,
      top: 34,
      transform: [{rotate: '20deg'}],
    },
  });
  return (
    <View style={styles.main}>
      <Image style={styles.coffee0} source={require('./coffee0.png')} />
      <Image style={styles.coffee1} source={require('./coffee1.png')} />
    </View>
  );
};

export const FinishedCoffeeImage = () => {
  const styles = StyleSheet.create({
    main: {
      position: 'relative',
    },
    coffee0: {
      position: 'absolute',
      width: 140,
      height: 140,
      left: -20,
      top: -10,
    },
  });
  return (
    <View style={styles.main}>
      <Image style={styles.coffee0} source={require('./coffee0.png')} />
    </View>
  );
};

export default CoffeeImage;
