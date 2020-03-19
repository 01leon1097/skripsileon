import React from 'react';
import {
  StyleProp,
  TouchableOpacityProps,
  TextProps,
  Text,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = TextProps & {
  touchableStyle?: StyleProp<TouchableOpacityProps>;
  onPress: () => void;
};
export default function TextButton(props: Props) {
  let { touchableStyle, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity onPress={onPress} style={touchableStyle}>
      <Text {...otherProps} />
    </TouchableOpacity>
  );
}
