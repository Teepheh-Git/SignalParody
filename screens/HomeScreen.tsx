import * as React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import ChatRoomItem from "../components/chatRoomItem";
import chatRoomsData from '../assets/dummy-data/ChatRooms'

export default function HomeScreen() {


    return (
        <View style={styles.page}>

            <FlatList
                data={chatRoomsData}
                renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            />


            {/*<ChatRoomItem chatRoom={chatRoom1} />*/}
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    }
});
