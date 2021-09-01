import React, { useEffect, useState } from "react";
import { View, Image, Text, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const ChatRoomHeader = ({ children }) => {
    const { width } = useWindowDimensions();



    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: width - 25,
                marginLeft: 25,
                padding: 10,
                alignItems: "center",
            }}
        >
            <Image
                source={{
                    uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
                }}
                style={{ width: 30, height: 30, borderRadius: 30 }}
            />
            <Text style={{ flex: 1, marginLeft: 10, fontWeight: "bold" }}>
                {children}
            </Text>
            <Feather
                name="camera"
                size={24}
                color="black"
                style={{ marginHorizontal: 10 }}
            />
            <Feather
                name="edit-2"
                size={24}
                color="black"
                style={{ marginHorizontal: 10 }}
            />
        </View>
    );
};

export default ChatRoomHeader;
