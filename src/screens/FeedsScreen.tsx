import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <Text>FeedsScreen</Text>
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

export default FeedsScreen;
