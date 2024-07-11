import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import styles from './styleLogin';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Please enter all fields');
      return;
    }
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Task');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('No User Found', 'Please check your email address or register');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Incorrect Password', 'Please enter the correct password');
      } else {
        Alert.alert('Login Failed', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerCircle}></View>
      <View style={styles.headerCircle1}></View>
      <View>
        <Text style={styles.headerText}>WELCOME BACK</Text>
        <ImageBackground 
          source={require('../../../assets/image/undraw_mobile_login.png')}
          style={styles.imageContainer}
        />
      </View>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.resetText}>Reset Password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
