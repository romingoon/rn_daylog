import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WriteScreen = () => {
  return (
    <View style={styles.block}>
      <Text>WriteScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WriteScreen;
