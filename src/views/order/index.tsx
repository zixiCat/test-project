import {useDebounceFn} from 'ahooks';
import React, {useRef, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View, Alert} from 'react-native';
import AddBtnImage from '../image/add-image';
import {FinishedHamburgerImage} from '../image/hamburger-image';
import PlateImage from '../image/plate-image';
import useOrderStore from './orderStore';

const width = Dimensions.get('window').width;

const Order = () => {
  const foodItemsPosX = useRef(new Animated.Value(0)).current;
  const tempViewValueX = useRef(new Animated.Value(140)).current;
  const tempViewValueY = useRef(new Animated.Value(-120)).current;
  const tempViewValueScale = useRef(new Animated.Value(0)).current;

  const curPreviewMenuItem = useOrderStore(s => s.curPreviewMenuItem);
  const order = useOrderStore(s => s.order);
  const setOrder = useOrderStore(s => s.setOrder);
  const fn = useDebounceFn;

  return (
    <View style={styles.main}>
      <View style={styles.add_btn}>
        <AddBtnImage
          onPress={() => {
            if (order.length === 5) {
              Alert.alert('温馨提示', '餐盘已满，请添加新的餐盘', [
                {text: '知道了'},
              ]);
              return;
            }
            const newOrder = [...order];
            curPreviewMenuItem && newOrder.push(curPreviewMenuItem);
            const foodItemsPosXValue = -50 * Math.sqrt(newOrder.length - 1);
            Animated.timing(foodItemsPosX, {
              toValue: foodItemsPosXValue,
              duration: 300,
              useNativeDriver: false,
            }).start(({finished}) => {
              if (finished) {
                setOrder(newOrder);
              }
            });
            Animated.parallel([
              Animated.timing(tempViewValueX, {
                toValue: foodItemsPosXValue,
                duration: 300,
                useNativeDriver: false,
              }),
              Animated.timing(tempViewValueY, {
                toValue: !(newOrder.length % 2) ? 0 : 40,
                duration: 300,
                useNativeDriver: false,
              }),
              Animated.timing(tempViewValueScale, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false,
              }),
            ]).start(({finished}) => {
              if (finished) {
                const leftValueOfLastItem = order.length * 50 + width / 2 - 140;
                tempViewValueX.setValue(140 - leftValueOfLastItem);
                tempViewValueY.setValue(newOrder.length % 2 ? -80 : -120);
                tempViewValueScale.setValue(0);
              }
            });
          }}
        />
      </View>
      <View>
        <View style={styles.plate}>
          <PlateImage />
        </View>
        <Animated.View style={styles.food_items}>
          {order.map((item, index) => {
            return (
              <Animated.View
                key={index}
                style={[
                  styles.food_item,
                  {
                    left: index * 50 + (width / 2 - 50),
                    marginTop: index % 2 ? 0 : 40,
                    zIndex: index % 2 ? 0 : 10,
                  },
                  {
                    transform: [{translateX: foodItemsPosX}],
                  },
                ]}>
                {item.finishedComp}
              </Animated.View>
            );
          })}
        </Animated.View>
        <Animated.View
          style={[
            styles.food_item,
            {
              left: order.length * 50 + (width / 2 - 50),
              transform: [
                {translateX: tempViewValueX},
                {translateY: tempViewValueY},
                {scale: tempViewValueScale},
              ],
            },
          ]}>
          {curPreviewMenuItem?.finishedComp}
        </Animated.View>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  main: {
    position: 'relative',
  },
  add_btn: {
    position: 'absolute',
    top: -110,
    right: 50,
  },
  plate: {
    position: 'absolute',
    margin: 'auto',
    right: 0,
    left: 0,
    top: -40,
  },
  food_items: {
    position: 'absolute',
    margin: 'auto',
    right: 0,
    left: 0,
  },
  food_item: {
    position: 'absolute',
    top: 25,
    margin: 'auto',
    width: 50,
  },
  title: {
    position: 'absolute',
    backgroundColor: 'red',
    top: 300,
  },
});
