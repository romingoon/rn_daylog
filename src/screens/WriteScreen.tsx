import React, { useState, useContext, useRef } from 'react';
import { Alert, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import WriteEditor from '../components/WriteEditor';
import WriteHeader from '../components/WriteHeader';
import LogContext from '../contexts/LogContext';
import useToast from '../hooks/useToast';
import { v4 as uuidv4 } from 'uuid';

export const WriteScreen = ({ route }: any) => {
  const log = route.params?.log;
  const [title, setTitle] = useState(log?.title ?? '');
  const [body, setBody] = useState(log?.body ?? '');
  const [date, setDate] = useState(log ? new Date(log.date) : new Date());
  const navigation = useNavigation();

  const { onCreate, onModify, onRemove } = useContext(LogContext);

  const onAskRemove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
          onPress: () => {
            useToast('취소되었습니다.', 'info');
          },
        },
        {
          text: '삭제',
          onPress: () => {
            if (onRemove) {
              onRemove(log?.id);
              navigation.goBack();
            }
          },
          style: 'destructive',
        },
      ],
      { cancelable: true }
    );
  };

  const onSave = () => {
    if (log) {
      onModify({
        id: log.id,
        date: date.toISOString(),
        title: !!title ? title : '제목 없음',
        body: !!body ? body : '내용 없음',
      });
    } else {
      onCreate({
        id: uuidv4(),
        title: title ? title : '제목 없음',
        body: body ? body : '내용 없음',
        date: date.toISOString(),
      });
    }

    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.block}>
      <KeyboardAvoidingView
        style={styles.avoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <WriteHeader
          onSave={onSave}
          onAskRemove={onAskRemove}
          isEditing={!!log}
          date={date}
          onChangeDate={setDate}
        />
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
