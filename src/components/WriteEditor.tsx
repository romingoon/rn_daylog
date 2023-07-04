import { eventNames } from 'process';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import useToast from '../hooks/useToast';

type WriteEditorProps = {
  title: string;
  body: string;
  onChangeTitle: (text: string) => void;
  onChangeBody: (text: string) => void;
};

const WriteEditor = ({ title, body, onChangeTitle, onChangeBody }: WriteEditorProps) => {
  const titleRef = useRef<TextInput>(null);
  const bodyRef = useRef<TextInput>(null);

  const [titleVaild, setTitleVaild] = useState(false);
  const [bodyVaild, setBodyVaild] = useState(false);

  const titleChangeHandler = (text: string) => {
    if (text.trim().length === 0) {
      setTitleVaild(false);
      useToast('제목을 입력해주세요', 'error');
      titleRef.current?.focus();
    } else {
      setTitleVaild(true);
    }

    onChangeTitle(text);
  };

  const bodyChangeHandler = (text: string) => {
    if (text.trim().length === 0) {
      setBodyVaild(false);
      useToast('내용을 입력해주세요', 'error');
      bodyRef.current?.focus();
    } else {
      setBodyVaild(true);
    }

    onChangeBody(text);
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.titleInput}
        placeholder='일기 제목을 입력하세요'
        returnKeyType='next'
        value={title}
        ref={titleRef}
        onChangeText={(text) => titleChangeHandler(text)}
        onSubmitEditing={() => bodyRef.current?.focus()}
      />
      <TextInput
        style={styles.bodyInput}
        placeholder='당신의 오늘 하루는 어땠나요?'
        multiline
        textAlignVertical='top'
        value={body}
        onChangeText={(text) => bodyChangeHandler(text)}
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
