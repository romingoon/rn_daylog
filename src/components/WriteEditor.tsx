import React, { useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type WriteEditorProps = {
  title: string;
  body: string;
  onChangeTitle: (text: string) => void;
  onChangeBody: (text: string) => void;
};

const WriteEditor = ({ title, body, onChangeTitle, onChangeBody }: WriteEditorProps) => {
  const bodyRef = useRef<TextInput>(null);
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.titleInput}
        placeholder='일기 제목을 입력하세요'
        returnKeyType='next'
        value={title}
        onChangeText={onChangeTitle}
        onSubmitEditing={() => bodyRef.current?.focus()}
      />
      <TextInput
        style={styles.bodyInput}
        placeholder='당신의 오늘 하루는 어땠나요?'
        multiline
        textAlignVertical='top'
        value={body}
        onChangeText={onChangeBody}
        ref={bodyRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    paddingVertical: 0,
    fontSize: 18,
    marginBottom: 16,
    color: '#52525B',
    fontWeight: 'bold',
  },
  bodyInput: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 0,
    color: '#52525B',
  },
});

export default WriteEditor;
