import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Conversations from "../src/screens/Coversations";
import Homepage from "../src/screens/Homepage";
import Messaging from "../src/screens/Messaging";
import Middle from "../src/screens/Middle";
import Profile from "../src/screens/Profile";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    const icon1 = require("../src/screens/Images/tabicon1.png")
    const icon2 = require("../src/screens/Images/tabicon2.png")
    const icon3 = require("../src/screens/Images/tabicon3.png")
    const icon4 = require("../src/screens/Images/tabicon4.png")
    const box = require("../src/screens/Images/box.png")
    const add = require("../src/screens/Images/add.png")
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{ showLabel: false }}>
            <Tab.Screen name="Homepage" component={Homepage} tabOptions={{
                headerShown: false
            }} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={icon1} resizeMode='contain' style={{
                            height: 25,
                            width: 25
                        }} />
                        {/* <Text>HOME</Text> */}
                    </View>
                )
            }} />
            <Tab.Screen name="Messaging" component={Messaging} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={icon2} resizeMode='contain' style={{
                            height: 25,
                            width: 25
                        }} />
                        {/* <Text>HOME</Text> */}
                    </View>
                )
            }} />
            <Tab.Screen name="Add" component={Middle} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={box} resizeMode='contain' style={{
                            height: 90,
                            width: 90,
                            marginBottom: -160
                        }} />
                        <Image source={add} resizeMode='contain' style={{
                            height: 20,
                            width: 20,
                            marginBottom: 60,
                            marginTop: 100,
                            marginLeft: 35
                        }} />
                        {/* <Text>HOME</Text> */}
                    </View>
                )
            }}/>
            <Tab.Screen name="Conversations" component={Conversations} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={icon3} resizeMode='contain' style={{
                            height: 25,
                            width: 25
                        }} />
                        {/* <Text>HOME</Text> */}
                    </View>
                )
            }}/>
            <Tab.Screen name="Profile" component={Profile} options={{
                tabBarIcon: ({ focused }) => (
                    <View>
                        <Image source={icon4} resizeMode='contain' style={{
                            height: 25,
                            width: 25
                        }} />
                        {/* <Text>HOME</Text> */}
                    </View>
                )
            }} />
        </Tab.Navigator>
    )
}

export default Tabs