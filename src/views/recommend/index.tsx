import React, {useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, Text, View} from 'react-native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';

import ChipsImage, {FinishedChipsImage} from '../image/chips-image';
import CoffeeImage, {FinishedCoffeeImage} from '../image/coffee-image';
import HamburgerImage, {FinishedHamburgerImage} from '../image/hamburger-image';
import useOrderStore from '../order/orderStore';

export interface MenuItem {
  id: number;
  name: string;
  previewComp: React.ReactNode;
  finishedComp: React.ReactNode;
  price: number;
}

const mockData: MenuItem[] = [
  {
    id: 1,
    name: 'FRIES',
    previewComp: <ChipsImage />,
    finishedComp: <FinishedChipsImage />,
    price: 4,
  },
  {
    id: 2,
    name: 'LATTE',
    previewComp: <CoffeeImage />,
    finishedComp: <FinishedCoffeeImage />,
    price: 3,
  },
  {
    id: 3,
    name: 'BURGER',
    previewComp: <HamburgerImage />,
    finishedComp: <FinishedHamburgerImage />,
    price: 6,
  },
  {
    id: 4,
    name: 'FRIES',
    previewComp: <ChipsImage />,
    finishedComp: <FinishedChipsImage />,
    price: 4,
  },
  {
    id: 5,
    name: 'LATTE',
    previewComp: <CoffeeImage />,
    finishedComp: <FinishedCoffeeImage />,
    price: 3,
  },
  {
    id: 6,
    name: 'BURGER',
    previewComp: <HamburgerImage />,
    finishedComp: <FinishedHamburgerImage />,
    price: 6,
  },
];

const {width} = Dimensions.get('window');

const Recommend = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  /**
   * The following two variables is used to set Animated Values when you change menu item
   */
  const opacity = useRef(new Animated.Value(1)).current;
  const titlePosX = useRef(new Animated.Value(0)).current;
  /**
   * The startContentOffset is used to record the initial offset of current menu item
   */
  const startContentOffset = useRef(0);

  const setMenuList = useOrderStore(s => s.setMenuList);
  const menuList = useOrderStore(s => s.menuList);
  const setCurPreviewMenuItem = useOrderStore(s => s.setCurPreviewMenuItem);

  /**
   * Init
   */
  useEffect(() => {
    setMenuList(mockData);
    setActiveIndex(0);
  }, [setMenuList]);

  useEffect(() => {
    setCurPreviewMenuItem(menuList[activeIndex]);
  }, [activeIndex, menuList, setCurPreviewMenuItem]);

  return (
    <View style={styles.main}>
      <SwiperFlatList
        onScroll={({
          nativeEvent: {
            contentOffset: {x},
          },
        }) => {
          const relativeValue =
            Math.abs(x - startContentOffset.current) / width;
          if (relativeValue <= 0.25) {
            opacity.setValue(1 - relativeValue * 4);
            titlePosX.setValue(relativeValue * 200);
          } else if (relativeValue > 0.25 && relativeValue <= 0.75) {
            opacity.setValue(0);
          } else {
            opacity.setValue((relativeValue - 0.75) * 4);
            titlePosX.setValue((relativeValue - 1) * 200);
          }
        }}
        onScrollAnimationEnd={() => {
          titlePosX.setValue(0);
        }}
        onScrollBeginDrag={e => {
          startContentOffset.current = Math.round(
            e.nativeEvent.contentOffset.x,
          );
        }}
        onScrollEndDrag={e => {
          const direction = !!(
            e.nativeEvent.contentOffset.x - startContentOffset.current >
            0
          );
          setActiveIndex(prev => {
            if (
              (prev === 0 && direction) ||
              (prev === menuList.length - 1 && !direction) ||
              (prev > 0 && prev < menuList.length - 1)
            ) {
              return direction ? prev + 1 : prev - 1;
            } else {
              return prev;
            }
          });
        }}
        index={activeIndex}
        data={menuList}
        autoplayLoopKeepAnimation
        renderItem={({item}: {item: MenuItem}) => (
          <View style={[styles.child]}>{item.previewComp}</View>
        )}
        onChangeIndex={e => {
          setActiveIndex(e.index);
        }}
      />

      <Animated.View
        style={[
          styles.title,
          {
            opacity: opacity,
            transform: [{translateY: titlePosX}],
          },
        ]}>
        <View>
          <Text style={styles.name}>{menuList[activeIndex]?.name}</Text>
        </View>
        <View>
          <Text style={styles?.price}>
            {String(menuList[activeIndex]?.price) + '$'}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    borderColor: '#eee',
    borderBottomWidth: 3,
  },
  title: {
    position: 'absolute',
    right: 50,
    top: 80,
  },
  name: {
    color: '#EB5C77',
    fontWeight: 'bold',
    letterSpacing: 1,
    fontSize: 32,
    textAlign: 'right',
  },
  price: {
    fontFamily: 'PingFang SC',
    fontSize: 24,
    color: '#EB5C77',
    textAlign: 'right',
  },
  add_btn: {
    position: 'absolute',
    right: 50,
    top: 180,
  },
  child: {
    width,
    height: 286,
  },
});
