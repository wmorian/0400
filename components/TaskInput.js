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
                    placeholder='Enter task'
                    autoFocus={true}
                    multiline={true}
                    onChangeText={(text) => setEnteredTask(text)} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='CANCEL'
                            color='red'
                            onPress={() => props.onCancel()} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='ADD'
                            color='green'
                            onPress={() => props.onAdd(enteredTask)} />
                    </View>
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
        flex: 1,

        borderWidth: 10
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
        width: '70%',
    },
    button: {
        width: '40%'
    }
})

export default TaskInput;
