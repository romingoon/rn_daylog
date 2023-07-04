import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LogContextProps } from '../contexts/LogContext';
import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

const formatDate = (date: Date) => {
  const d = new Date(date);
  const now = Date.now();
  const diff = (now - d.getTime()) / 1000;

  if (diff < 60 * 1) {
    return '방금 전';
  } else if (diff < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(date, { addSuffix: true, locale: ko });
  }
  return format(d, 'PPP EEE p', { locale: ko });
};

const truncate = (text: string) => {
  // 정규식을 사용해 모든 줄 바꿈 문자 제거.
  const replacedText = text.replace(/\n/g, ' ');

  if (replacedText.length <= 100) {
    return replacedText;
  }
  return replacedText.slice(0, 100).concat('...');
};

const FeedListItem = ({ log }: LogContextProps) => {
  const { title, body, date } = log as LogContextProps;

  const formattedDate = new Date(date);

  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Write', { log });
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.block,
        Platform.OS === 'ios' && pressed && { backgroundColor: '#efefef' },
      ]}
      android_ripple={{ color: 'white' }}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{truncate(body)}</Text>
      <Text style={styles.date}>{formatDate(formattedDate)}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  block: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#DEDEDE',
  },
  title: {
    fontSize: 18,
    color: '#52525B',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  body: {
    fontSize: 14,
    color: '#37474f',
    lineHeight: 21,
  },
  date: {
    fontSize: 12,
    color: '#AAAAAA',
    marginTop: 8,
  },
});

export default FeedListItem;
