import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';

const FeedsScreen = () => {
  return (
    <View style={styles.block}>
      <FloatingWriteButton />
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
