import React from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const SearchHeader = () => {
  const { width } = useWindowDimensions();
  console.log(width);

  return <View style={[styles.block, { width: width - 32, height: 24 }]} />;
};

const styles = StyleSheet.create({
  block: {
    backgroundColor: '#0078D7',
  },
});

export default SearchHeader;
