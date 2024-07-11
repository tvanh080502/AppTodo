import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './styleStart';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerCircle1}></View>
      <View style={styles.headerCircle}></View>
      <View>
        <View style={styles.phoneScreen}>
          <ImageBackground 
            source={require('../../../assets/image/undraw_mobile_application_re_13u31.png')}
            style={styles.designCircle}
          />
          <Text style={styles.designText}>GET YOUR DESIGNS ASAP</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
