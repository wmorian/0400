import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {

  const [isAddMode, setIsAddMode] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(0);
  const [task1, setTask1] = useState('add your first task');
  const [task2, setTask2] = useState('add your second task');
  const [task3, setTask3] = useState('add your third task');

  const onAddingHandler = (id) => {
    setActiveTaskId(id);
    setIsAddMode(true);
  }

  return (
    <View style={styles.screen}>
      <TaskInput visible={isAddMode}
        onAdd={(task) => {
          if (activeTaskId === 1) setTask1(task);
          else if (activeTaskId === 2) setTask2(task);
          else if (activeTaskId === 3) setTask3(task);

          setIsAddMode(false);
        }}
        onCancel={() => setIsAddMode(false)}/>
      <TaskItem id={1} text={task1} onAdding={onAddingHandler}></TaskItem>
      <TaskItem id={2} text={task2} onAdding={onAddingHandler}></TaskItem>
      <TaskItem id={3} text={task3} onAdding={onAddingHandler}></TaskItem>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'beige'
  }
});