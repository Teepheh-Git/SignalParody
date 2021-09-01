import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import Message from "../components/Message";
import chatRoomsData from '../assets/dummy-data/Chats'
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
    return (
        <SafeAreaView style={styles.page}>


            <FlatList
                data={chatRoomsData.messages}
                renderItem={({item}) => <Message message={item}/>}
                inverted
            />
            <MessageInput/>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
})
