import React, { useRef, useState, useEffect } from 'react';
import { Animated, Button, View, Text, StyleSheet } from 'react-native';

const SlideLeftAndRight = () => {
  const animation = useRef(new Animated.Value(0)).current;
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    Animated.timing(animation, {
      toValue: enabled ? 1 : 0,
      useNativeDriver: false,
    }).start();
  }, [enabled, animation]);

  return (
    <View>
      <Animated.View
        style={[
          styles.box,
          {
            transform: [
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 150],
                }),
              },
            ],
            opacity: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0.5],
            }),
          },
        ]}
      />
      <Button title='Toggle' onPress={() => setEnabled(!enabled)} />
    </View>
  );
};
const CalendarScreen = () => {
  return (
    <View style={styles.block}>
      <Text> CalendarScreen</Text>
      <SlideLeftAndRight />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    padding: 16,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
  },
});

export default CalendarScreen;
