import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const ChipsImage = () => {
  const styles = StyleSheet.create({
    main: {
      position: 'relative',
    },
    chip0: {
      position: 'absolute',
      transform: [{rotate: '21deg'}],
      top: 70,
      left: 50,
      width: 172,
      height: 172,
    },
    chip1: {
      position: 'absolute',
      width: 172,
      height: 172,
      left: 58,
      top: -20,
      transform: [{rotate: '8deg'}],
    },
    chip2: {
      position: 'absolute',
      width: 172,
      height: 172,
      left: 20,
      top: 25,
    },
  });
  return (
    <View style={styles.main}>
      <Image style={styles.chip0} source={require('./chips0.png')} />
      <Image style={styles.chip1} source={require('./chips1.png')} />
      <Image style={styles.chip2} source={require('./chips2.png')} />
    </View>
  );
};

export const FinishedChipsImage = () => {
  const styles = StyleSheet.create({
    chip0: {
      transform: [{rotate: '5deg'}],
      width: 105,
      height: 105,
      top: 8,
    },
  });
  return <Image style={styles.chip0} source={require('./chips0.png')} />;
};

export default ChipsImage;
