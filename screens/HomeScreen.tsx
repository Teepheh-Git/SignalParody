import * as React from 'react';
import {FlatList, StyleSheet, View, Text, Pressable} from 'react-native';
import ChatRoomItem from "../components/chatRoomItem";
import chatRoomsData from '../assets/dummy-data/ChatRooms'
import {Auth} from 'aws-amplify'

export default function HomeScreen() {


    function logOut() {
        Auth.signOut()
    }

    return (
        <View style={styles.page}>

            <FlatList
                data={chatRoomsData}
                renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.id}
            />
            <Pressable onPress={logOut} style={{
                backgroundColor: 'red',
                height: 50,
                margin: 10,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text>Logout</Text>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white'
    }
});
