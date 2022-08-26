import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import useOrderStore from '../order/orderStore';

const BottomBar = () => {
  const order = useOrderStore(s => s.order);

  return (
    <View style={styles.main}>
      <View style={styles.price}>
        <Text style={styles.price_sum}>
          {order
            .map(i => i.price)
            .reduce(
              (previousValue, currentValue) => previousValue + currentValue,
              0,
            )}
        </Text>
        <Text style={styles.price_unit}>$</Text>
      </View>
      <LinearGradient
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}
        colors={['#FD003C', '#FF5D79']}>
        <View style={styles.btn}>
          <Text style={styles.btn_text}>Pay</Text>
        </View>
      </LinearGradient>
    </View>
  );
};

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    bottom: 0,
    height: 65,
    right: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
  },
  price_sum: {
    color: '#4F4F4F',
    fontSize: 43,
  },
  price_unit: {
    color: '#4F4F4F',
    fontSize: 28,
    transform: [{translateY: 14}],
  },
  btn: {
    width: 143,
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    margin: 0,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {
    fontSize: 32,
    fontWeight: 'bold',
    transform: [{translateY: -2}],
    color: '#fff',
  },
});

export default BottomBar;
