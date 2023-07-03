import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { LogContextType } from '../contexts/LogContext';
import FeedListItem from './FeedListItem';

const FeedList = ({ logs, onScrolledToBottom }: LogContextType) => {
  const onScroll = (event: any) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const distanceFromBottom = contentSize.height - layoutMeasurement.height - contentOffset.y;

    if (distanceFromBottom < 72) {
      onScrolledToBottom && onScrolledToBottom(true);
    } else {
      onScrolledToBottom && onScrolledToBottom(false);
    }
  };

  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }: any) => <FeedListItem log={item} title={''} body={''} date={''} />}
      keyExtractor={(item: any) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onScroll={onScroll}
    />
  );
};

const styles = StyleSheet.create({
  block: { flex: 1, backgroundColor: '#FFF8DC' },
  separator: {
    backgroudnColor: '#e0e0e0',
    heigth: 1,
    width: '100%',
  },
});

export default FeedList;
