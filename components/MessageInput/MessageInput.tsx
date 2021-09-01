import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform} from "react-native";
import {AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";

const MessageInput = () => {

    const [message, setMessage] = useState('');


    const sendMessage = () => {
        console.warn('sending message', message);
        setMessage('')
    }

    const onPlusClicked = () => {
        alert('feature coming soon')
    }

    const onPress = () => {
        if (message) {
            sendMessage()
        } else {
            onPlusClicked()
        }

    }

    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={100}
            behavior={Platform.OS === "ios" ? "padding" : 'height'}
            style={styles.root}>

            <View style={styles.inputContainer}>
                <SimpleLineIcons name={'emotsmile'} size={24} color={'grey'} style={styles.icon}/>
                <TextInput
                    value={message}
                    // onChangeText={(newMessage)=> setMessage(newMessage)}
                    onChangeText={setMessage}
                    style={styles.input}
                    placeholder={'signal text...'}/>
                <Feather name={'camera'} size={24} color={'grey'} style={styles.icon}/>
                <MaterialCommunityIcons name={'microphone-outline'} size={24} color={'grey'} style={styles.icon}/>

            </View>


            <Pressable onPress={onPress} style={styles.buttonContainer}>

                {message ? <Ionicons name={'send'} size={18} color={'white'}/> :
                    <AntDesign name={'plus'} size={24} color={'white'}/>}

            </Pressable>

        </KeyboardAvoidingView>
    );
};

export default MessageInput;


const styles = StyleSheet.create({
    root: {
        padding: 10,
        flexDirection: "row",

    },
    row: {
        flexDirection: "row",
    },
    inputContainer: {
        backgroundColor: "#f2f2f2",
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#dedede",
        alignItems: "center",
        flexDirection: "row",
        padding: 5,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 5,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: "#3777f0",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "white",
        fontSize: 35,
    },

    sendImageContainer: {
        flexDirection: "row",
        marginVertical: 10,
        alignSelf: "stretch",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 10,
    },
});

