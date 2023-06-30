import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { onCreateProps } from '../contexts/LogContext';

const truncate = (text: string) => {
  // 정규식을 사용해 모든 줄 바꿈 문자 제거.
  const replacedText = text.replace(/\n/g, ' ');

  if (replacedText.length <= 100) {
    return replacedText;
  }
  return replacedText.slice(0, 100).concat('...');
};

const FeedListItem = ({ log }: onCreateProps) => {
  const { title, body, date } = log as onCreateProps;

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
      ]}
      android_ripple={{ color: 'white' }}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
      <Text style={styles.date}>{date}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  body: {
    fontSize: 14,
    lineHeight: 20,
  },
  date: {
    fontSize: 12,
    color: '#AAAAAA',
  },
});

export default FeedListItem;
