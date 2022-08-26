import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const PlateImage = () => {
  return (
    <View style={styles.main}>
      <Image
        style={styles.plate}
        source={require('./plate.png')}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  plate: {
    width: 300,
  },
});

export default PlateImage;
