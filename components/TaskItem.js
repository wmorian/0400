import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const TaskItem = props => {
    return (
        <View style={styles.taskItem}>
            <Button
                type='clear'
                onPress={() => props.onDelete(props.id)}
                icon={
                    <Icon
                        name="minus-square"
                        size={25}
                        color="red"
                    />
                }
            />
            <TouchableOpacity
                style={styles.taskButton}
                activeOpacity={0.8}
            // onPress={() => props.onAdding(props.id)}
            >
                <View style={styles.taskText}>
                    <Text>{props.text}</Text>
                </View>
            </TouchableOpacity>
            <Button
                type='clear'
                onPress={() => props.onAdd(props.id)}
                icon={
                    <Icon
                        name="plus-square"
                        size={25}
                        color="green"
                    />
                }
            />
        </View>
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
        backgroundColor: 'ivory'
    },
    taskItem: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default TaskItem;