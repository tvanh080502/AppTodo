import React from 'react';
import { View, Text,ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styleTask';

const TaskScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
            <ImageBackground 
                source={require('../../../assets/image/Ellipse3.png')}
                style={styles.profileImage}
            />
            <Text style={styles.welcomeText}>WELCOME OGUNDIPE</Text>
        </View>
        <View style={styles.headerCircle}></View>
        <View style={styles.headerCircle1}></View>
        <View style={styles.content}>
            <ImageBackground 
                source={require('../../../assets/image/Clock.png')}
                style={styles.clockImage}
            />
            <Text style={styles.greetingText}>GOOD AFTERNOON OGUNDIPE</Text>
            <TouchableOpacity style={styles.todoContainer} onPress={() => navigation.navigate('Task Detail')} >
                <Text style={styles.todoTitle}>Here Are Your Todo's For This Afternoon</Text>
                <Text style={styles.todoItem}>• Watch Manchester United Vs Liverpool Match | 2:00</Text>
                <Text style={styles.todoItem}>• Watch APC OSUN STATE MEGA Rally</Text>
                <Text style={styles.todoItem}>• Book Table Tennis Game On Sporty</Text>
                <Text style={styles.todoItem}>• Watch Movie | SAFE HOUSE & GAME OF THRONES</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
};

export default TaskScreen;
