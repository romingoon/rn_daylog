import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';

export const WriteScreen = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const navigation = useNavigation();

  const { onCreate } = useContext(LogContext);

  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <WriteHeader onSave={onSave} />
        <WriteEditor title={title} body={body} onChangeTitle={setTitle} onChangeBody={setBody} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: '#FFF8DC',
  },
  avoidingView: {
    flex: 1,
  },
});

export default WriteScreen;
