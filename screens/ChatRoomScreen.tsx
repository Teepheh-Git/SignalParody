import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Message from "../components/Message";
import chatRoomsData from '../assets/dummy-data/Chats'

export default function ChatRoomScreen() {
    return (
        <View style={styles.page}>


            <FlatList
                data={chatRoomsData.messages}
                renderItem={({item}) => <Message message={item}/>}
                inverted
            />

        </View>
    );
};


const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
    },
})
