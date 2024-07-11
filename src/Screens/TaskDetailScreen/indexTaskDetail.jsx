import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './styleTaskDetail';
import * as Progress from 'react-native-progress';

const TaskDetailScreen = ({ navigation }) => {

  const taskData = {
    title: 'Dự án phát triển ứng dụng',
    completionRate: 0.5,
    subtasks: [
      { id: '1', title: 'Thiết kế UI/UX', remainingTime: '2h', completed: 0.8 },
      { id: '2', title: 'Phát triển API', remainingTime: '4h', completed: 0.3 },
      { id: '3', title: 'Thiết lập cơ sở dữ liệu', remainingTime: '1h', completed: 0.7 },
      { id: '4', title: 'Thiết kế UI/UX', remainingTime: '2h', completed: 0.8 },
      { id: '5', title: 'Phát triển API', remainingTime: '4h', completed: 0.3 },
      { id: '6', title: 'Thiết lập cơ sở dữ liệu', remainingTime: '1h', completed: 0.7 }
    ],
    totalTimeRemaining: '7h'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{taskData.title}</Text>
      <Progress.Bar progress={taskData.completionRate} width={null} style={styles.progressBar} />
      <Text>Hoàn thành: {Math.round(taskData.completionRate * 100)}%</Text>
      <FlatList
        data={taskData.subtasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.subtaskCard}>
            <Text style={styles.subtaskTitle}>{item.title}</Text>
            <Text>Thời gian còn lại: {item.remainingTime}</Text>
            <Progress.Bar progress={item.completed} width={null} style={styles.progressBar} />
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Task')}>
                <Text style = {styles.textbutton}>Sửa</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Task')}>
                <Text style = {styles.textbutton} >Xóa</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.addwork} 
        onPress={() => navigation.navigate('Task')}
        >
          <Text style = {styles.textaddwork} >Thêm nhiệm vụ mới</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetailScreen;
