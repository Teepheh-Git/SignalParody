import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from "react-native";
import Message from "../components/Message";
import chatRoomsData from '../assets/dummy-data/Chats'
import MessageInput from "../components/MessageInput";
import {useNavigation, useRoute} from "@react-navigation/native";

export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation()

    console.warn("this is chatRoom: ", route.params?.id)

    navigation.setOptions({title: 'Boluwatife'})

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
