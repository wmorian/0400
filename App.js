import React, { useState } from 'react';
import { View, Modal, StyleSheet, Text, TouchableOpacity } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {

  const [isAddMode, setIsAddMode] = useState(false);
  const [task1, setTask1] = useState('');
  const [task2, setTask2] = useState('');
  const [task3, setTask3] = useState('');

  return (
    <View style={styles.screen}>
      <TaskInput visible={isAddMode}
        onAdd={(id, task) => {
          if (id == task1) setTask1(task);
          else if (id == task2) setTask2(task);
          else if (id == task3) setTask3(task);

          setIsAddMode(false);
        }}
        onCancel={() => setIsAddMode(false)}/>
      <TaskItem id={1} task={task1} onAdding={() => setIsAddMode(true)}></TaskItem>
      <TaskItem id={2} task={task2} onAdding={() => setIsAddMode(true)}></TaskItem>
      <TaskItem id={3} task={task3} onAdding={() => setIsAddMode(true)}></TaskItem>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige'
  }
});