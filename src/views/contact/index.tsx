import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PhoneIcon from './PhoneIcon';
import LocationIcon from './LocationIcon';

const Contact = () => {
  return (
    <View style={styles.main}>
      <View style={styles.location_wrapper}>
        <LocationIcon />
        <Text style={styles.text}>
          Dongcheng District Metro Cultural Building
        </Text>
      </View>
      <View>
        <PhoneIcon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 65,
    height: 65,
    right: 30,
    left: 22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  location_wrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    marginLeft: 20,
    color: '#606060',
    width: 200,
  },
});

export default Contact;
