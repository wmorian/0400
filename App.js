import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';

export default function App() {

  const [isAddMode, setIsAddMode] = useState(false);
  const [activeTaskId, setActiveTaskId] = useState(0);
  const [task1, setTask1] = useState('add task');
  const [task2, setTask2] = useState('add task');
  const [task3, setTask3] = useState('add task');

  const onAddingHandler = (id) => {
    setActiveTaskId(id);
    setIsAddMode(true);
  }

  const onDeleteHandler = (id) => {
    if (id === 1) setTask1('add task')
    else if (id === 2) setTask2('add task')
    else if (id === 3) setTask3('add task')
  }

  return (
    <View style={styles.screen}>
      <TaskInput visible={isAddMode}
        onSubmit={(task) => {
          if (activeTaskId === 1) setTask1(task);
          else if (activeTaskId === 2) setTask2(task);
          else if (activeTaskId === 3) setTask3(task);

          setIsAddMode(false);
        }}
        onCancel={() => setIsAddMode(false)} />

      <TaskItem id={1} text={task1} onAdd={onAddingHandler} onDelete={onDeleteHandler}></TaskItem>
      <TaskItem id={2} text={task2} onAdd={onAddingHandler} onDelete={onDeleteHandler}></TaskItem>
      <TaskItem id={3} text={task3} onAdd={onAddingHandler} onDelete={onDeleteHandler}></TaskItem>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'antiquewhite'
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});