import React, { useContext } from 'react';
import { useWindowDimensions } from 'react-native';
import { View, Pressable, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchContext, { SearchContextType } from '../contexts/SearchContext';
import TransparentCircleButton from './ TransparentCircleButton';

const SearchHeader = () => {
  const { width } = useWindowDimensions();
  const { keyword, onChangeText } = useContext<SearchContextType>(SearchContext);

  return (
    <View style={[styles.block, { width: width - 16 }]}>
      <TextInput
        style={styles.input}
        placeholder='검색어를 입력하세요'
        value={keyword}
        onChangeText={onChangeText}
        autoFocus
      />
      <Pressable
        style={({ pressed }) => [styles.button, pressed && { opacity: 0.5 }]}
        onPress={() => onChangeText('')}
      >
        <Ionicons name='close-circle' size={24} color='#F43F5E' />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: 8,
  },
});

export default SearchHeader;
