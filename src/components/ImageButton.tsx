import React from 'react';
import {
  StyleProp,
  ImageProps,
  TouchableOpacityProps,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = ImageProps & {
  touchableStyle?: StyleProp<TouchableOpacityProps>;
  onPress: () => void;
};
export default function ImageButton(props: Props) {
  let { touchableStyle, onPress, ...otherProps } = props;
  return (
    <TouchableOpacity onPress={onPress} style={touchableStyle}>
      <Image {...otherProps} />
    </TouchableOpacity>
  );
}
