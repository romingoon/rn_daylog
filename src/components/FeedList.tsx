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
  separator: { borderBottomWidth: 1, borderBottomColor: '#DEDEDE' },
});

export default FeedList;
