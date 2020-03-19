import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Ionicons,
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import {
  HomeScreen,
  AvatarScreen,
  FriendsScreen,
  LeaderboardScreen,
  ShopScreen,
  PlayScreen,
  WelcomeScreen,
  FirstScreen,
  SignupScreen,
  LoginScreen,
} from '../screens';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './StackNavigator';
import { StackParamList } from '../types/Navigation';
import LevelScreen from '../screens/LevelScreen/LevelScreen';
// import AuthContextProvider, { AuthContext } from '../configs/auth/authContext';
// import StackNavigator from './StackNavigator';
// import { SwitchNavigator } from 'react-navigation';
// import Orientation, { orientation } from 'react-native-orientation';
// import Navigator from './navigator/navitagor';
// import { Container, Content } from 'native-base';
// import { Swiper } from 'react-native-animated-swiper';

function IconWithBadge({ name, badgeCount, color, size }) {
  return (
    <View style={{ width: 24, height: 24, margin: 5 }}>
      <Ionicons name={name} size={size} color={color} />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  // You should pass down the badgeCount in some other ways like React Context API, Redux, MobX or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
}

// export const Stack = createStackNavigator<StackParamList>();
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <HomeIconWithBadge
                name={
                  focused
                    ? 'ios-information-circle'
                    : 'ios-information-circle-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Shop') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'cart' : 'cart-outline'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Avatar') {
            return (
              <MaterialCommunityIcons
                name={
                  focused ? 'controller-classic' : 'controller-classic-outline'
                }
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Friends') {
            return (
              <Ionicons
                name={focused ? 'ios-contacts' : 'ios-contacts'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Leaderboards') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'trophy-variant' : 'trophy-variant-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Shop" component={LevelScreen} />
      <Tab.Screen name="Avatar" component={PlayScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Friends" component={FriendsScreen} />
      <Tab.Screen name="Leaderboards" component={LeaderboardScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={Home} />
        <Stack.Screen name="Play" component={PlayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
