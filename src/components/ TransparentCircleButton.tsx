import React from 'react';
import { Platform, Pressable, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type TransparentCircleButtonProps = {
  name: string;
  color: string;
  hasMarginRight?: boolean;
  onPress?: () => void;
};

const TransparentCircleButton = ({ name, color, hasMarginRight, onPress }: TransparentCircleButtonProps) => {
  return (
    <View style={[styles.iconButtonWrapper, hasMarginRight && styles.rightMargin]}>
      <Pressable
        style={({ pressed }) => [
          styles.iconButton,
          Platform.OS === 'ios' &&
            pressed && {
              backgroundColor: '#efefef',
            },
        ]}
        onPress={onPress}
        android_ripple={{ color: 'white' }}
      >
        <Ionicons name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconButtonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  rightMargin: {
    marginRight: 8,
  },
});

export default TransparentCircleButton;
