import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CupIcon from './icons/cup-icon';
import HamburgIcon from './icons/hamburg-icon';
import RecommendIcon from './icons/recommend-icon';
import SnackIcon from './icons/snack-icon';

const TopBar = () => {
  return (
    <View style={styles.main}>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#FD003C', '#FF5D79']}
        style={styles.content}>
        <View>
          <RecommendIcon />
        </View>
        <View>
          <HamburgIcon />
        </View>
        <View>
          <CupIcon />
        </View>
        <View>
          <SnackIcon />
        </View>
      </LinearGradient>
    </View>
  );
};

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  main: {
    position: 'relative',
  },
  content: {
    height: 73,
    display: 'flex',
    width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default TopBar;
