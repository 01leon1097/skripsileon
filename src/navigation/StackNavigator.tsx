import React, { useContext } from 'react';
import { Button } from 'react-native';
import { Stack } from './AppNavigator';
// import { AuthContext } from '../configs/auth/authContext';
// import { HomeScene, DetailsScene, LoginScene, RegisterScene } from '../scenes';
import {
  HomeScreen,
  AvatarScreen,
  FriendsScreen,
  LeaderboardScreen,
  ShopScreen,
  // PlayScreen,
  WelcomeScreen,
  FirstScreen,
  SignupScreen,
} from '../screens';

export default function StackNavigator() {
  // let { isLogin, dispatch: authDispatch } = useContext(AuthContext);
  return (
    // <Stack.Navigator
    //   initialRouteName={isLogin ? 'Home' : 'Login'}
    //   screenOptions={
    //     isLogin
    //       ? {
    //           headerRight: () => (
    //             <Button
    //               title="Log Out"
    //               onPress={() => authDispatch({ type: 'SIGN_OUT' })}
    //             />
    //           ),
    //         }
    //       : null
    //   }
    // >
    //   {isLogin ? (
    //     <>
    //       <Stack.Screen name="Home" component={HomeScreen} />
    //       <Stack.Screen
    //         name="Details"
    //         component={DetailsScene}
    //         options={{ title: 'Default Title' }}
    //       />
    //     </>
    //   ) : (
    //     <>
    //       <Stack.Screen
    //         name="Login"
    //         component={LoginScene}
    //         options={{ animationTypeForReplace: isLogin ? 'push' : 'pop' }}
    //       />
    //       <Stack.Screen name="Register" component={RegisterScene} />
    //     </>
    //   )}
    // </Stack.Navigator>
    <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      {/* <Stack.Screen name="Avatar" component={AvatarScreen} /> */}
      {/* <Stack.Screen name="Friends" component={FriendsScreen} /> */}
      {/* <Stack.Screen name="Leaderboard" component={LeaderboardScreen} /> */}
      {/* <Stack.Screen name="Shop" component={ShopScreen} /> */}
      <Stack.Screen name="First" component={FirstScreen} />
    </Stack.Navigator>
  );
}
