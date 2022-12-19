import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../profile/profile';
import Search from '../search/search';
import Events from '../events/events';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Search"
            screenOptions={{
                tabBarActiveTintColor: '#db7093',
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                },
            }}>
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="account" color={"#db7093"} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="party-popper" color={"#db7093"} size={30} />
                    ),
                }}
            />
            <Tab.Screen
                name="Events"
                component={Events}
                options={{
                    tabBarLabel: 'Create Event',
                    headerShown: false,
                    tabBarIcon: () => (
                        <MaterialCommunityIcons name="plus" color={"#db7093"} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Home;