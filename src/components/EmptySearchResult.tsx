import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
type messageType = {
  [key: string]: string;
};

const message: messageType = {
  NOT_FOUND: '검색 결과가 없습니다.',
  EMPTY_KEYWORD: '검색어를 입력해주세요.',
};

const EmptySearchResult = ({ type }: messageType) => {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>{message[type]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#A9A9A9',
  },
});

export default EmptySearchResult;
