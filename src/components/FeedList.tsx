import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { LogContextType } from '../contexts/LogContext';
import FeedListItem from './FeedListItem';

const FeedList = ({ logs }: LogContextType) => {
  return (
    <FlatList
      data={logs}
      style={styles.block}
      renderItem={({ item }: any) => <FeedListItem log={item} title={''} body={''} date={''} />}
      keyExtractor={(item: any) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
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
