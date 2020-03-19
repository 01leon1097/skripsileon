import { RouteProp as RoutePropBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export type StackRouteProp<T extends keyof StackParamList> = RoutePropBase<
  StackParamList,
  T
>;

export type TabRouteProp<T extends keyof TabParamList> = RoutePropBase<
  TabParamList,
  T
>;

export type StackNavProp<T extends keyof StackParamList> = StackNavigationProp<
  StackParamList,
  T
>;

export type TabNavProp<T extends keyof TabParamList> = BottomTabNavigationProp<
  TabParamList,
  T
>;

export type StackParamList = {
  Home: undefined;
  Avatar: undefined;
  Friends: undefined;
  Leaderboard: undefined;
  Shop: undefined;
  Signup: undefined;
  Welcome: undefined;
  First: undefined;
  // Details?: { title: string };
  Play: undefined;
  Login: undefined;
  Register: undefined;
};

export type TabParamList = {
  // later usage
  HomeTab: undefined;
  WishlistTab: undefined;
  ProfileTab: undefined;
};

export type StackRouteName = keyof StackParamList;
export type TabRouteName = keyof TabParamList;
