import React, { useEffect, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, Pressable, StyleSheet, View, Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

type FloatingWriteButtonProps = {
  hidden: boolean;
};
const FloatingWriteButton = ({ hidden }: FloatingWriteButtonProps) => {
  const navigation = useNavigation();

  const onPress = () => navigation.navigate('Write', []);

  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 1 : 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 150],
              }),
            },
          ],
          opacity: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
        },
      ]}
    >
      <Pressable
        style={({ pressed }) => [
          styles.button,
          Platform.OS === 'ios' && {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
        android_ripple={{ color: 'white' }}
        onPress={onPress}
      >
        <Ionicons name='create-outline' size={24} style={styles.icon} />
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    //ios 전용 그림자 설정
    shadowColor: '#4d4d4d',
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 4,
    //android 전용 그림자 설정
    elevation: 3,
    //안드로이드에서 물결효과가 영역 밖으로 나가는 것을 방지
    //ios에서는 overflow가 hidden 일 경우 그림자가 보여지지 않음
    overflow: 'hidden',
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FB7185',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
});

export default FloatingWriteButton;
