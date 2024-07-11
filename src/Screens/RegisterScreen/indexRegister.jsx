import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styleRegister';
import auth from '@react-native-firebase/auth';

const RegisterScreen = ({ navigation }) => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      Alert.alert("Mật khẩu nhập lại không khớp!");
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Đăng ký thành công!');
        navigation.navigate('Sign In'); 
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Địa chỉ email đã được đăng ký', 'Vui lòng sử dụng email khác để thực hiện');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Địa chỉ email không hợp lệ!');
        } else {
          Alert.alert(error.message);
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerCircle1}></View>
      <View style={styles.headerCircle}></View>
      <Text style={styles.headerText}>FILL THE FORMS TO GET STARTED</Text>
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>REGISTER</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text 
          style={styles.signInText} 
          onPress={() => navigation.navigate('Sign In')}
        >
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default RegisterScreen;
