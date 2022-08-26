import React from 'react';
import {Dimensions, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BottomBar from './views/bottom-bar';
import Recommend from './views/recommend';
import TopBar from './views/top-bar';
import Order from './views/order';
import Contact from './views/contact';

const App = () => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      colors={['#F5F5F5', '#FFEDED']}>
      <SafeAreaView
        style={{
          height: Dimensions.get('window').height,
        }}>
        <TopBar />
        <Recommend />
        <Order />
        <Contact />
        <BottomBar />
      </SafeAreaView>
    </LinearGradient>
  );
};

export default App;
