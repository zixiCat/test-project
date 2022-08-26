import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

interface AddBtnImageProps {
  onPress?: () => void;
}

const AddBtnImage = (props: AddBtnImageProps) => {
  return (
    <View style={styles.main}>
      <Image style={styles.add} source={require('./btn.png')} />
      <View style={styles.btn_wrapper}>
        <TouchableWithoutFeedback
          onPress={() => {
            props.onPress?.();
          }}>
          <View style={styles.button}>
            <Text style={styles.buttonText} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'relative',
    left: 25,
  },
  add: {
    width: 105,
    height: 105,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  buttonText: {
    textAlign: 'center',
    width: 80,
    color: 'white',
  },
  btn_wrapper: {
    position: 'absolute',
    left: 20,
  },
});

export default AddBtnImage;
