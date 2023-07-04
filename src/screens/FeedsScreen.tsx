import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FloatingWriteButton from '../components/FloatingWriteButton';
import LogContext, { LogContextType } from '../contexts/LogContext';
import FeedList from '../components/FeedList';
const FeedsScreen = () => {
  const [hidden, setHidden] = useState(false);
  const { logs, onCreate, onModify }: LogContextType = useContext(LogContext);

  const onScrolledToBottom = (isBottom: Boolean) => {
    if (hidden !== isBottom) {
      setHidden(!!isBottom);
    }
  };

  return (
    <View style={styles.block}>
      <FeedList logs={logs} onCreate={onCreate} onModify={onModify} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
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
