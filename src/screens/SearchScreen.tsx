import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import EmptySearchResult from '../components/EmptySearchResult';
import FeedList from '../components/FeedList';
import LogContext from '../contexts/LogContext';
import SearchContext from '../contexts/SearchContext';

const SearchScreen = ({ navigation }: any) => {
  const { keyword } = useContext(SearchContext);
  const { logs } = useContext(LogContext);

  const filtered = keyword === '' ? [] : logs.filter((log) => log.title.includes(keyword));

  return (
    <View style={styles.block}>
      <FeedList logs={filtered} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});

export default SearchScreen;
