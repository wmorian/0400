import React, { useState } from 'react';
import { Modal, View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = props => {

    const [enteredTask, setEnteredTask] = useState('');
    
    return (
        <Modal
            visible={props.visible}
            animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder='enter task'
                    onChangeText={(text) => setEnteredTask(text)} />
                <View styles={styles.buttonContainer}>
                    <Button title='CANCLE' onPress={() => props.onCancel()} />
                    <Button title='ADD' onPress={() => props.onAdd(enteredTask)} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        width: '80%',
        margin: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '70%'
    }
})

export default TaskInput;
