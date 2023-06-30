import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext, { LogContextType, onCreateProps } from '../contexts/LogContext';
import FeedList from '../components/FeedList';
const FeedsScreen = () => {
  const { logs, onCreate }: LogContextType = useContext(LogContext);

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onCreate={onCreate} />
      <FloatingWriteButton />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
});

export default FeedsScreen;
