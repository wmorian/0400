import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = props => {
    const [taskText, setTaskText] = useState('add new task');

    return (
        <TouchableOpacity
            style={styles.taskButton}
            activeOpacity={0.8}
            onPress={() => props.onAdding(props.id)}>
            <View style={styles.taskText}>
                <Text>{props.task}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    taskButton: {
        width: '90%',
    },
    taskText: {
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'tan'
    }
});

export default TaskItem;