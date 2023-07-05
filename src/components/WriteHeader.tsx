import React, { useState, useReducer } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import TransparentCircleButton from './ TransparentCircleButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

type WriteHeaderProps = {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
  date: Date;
  onChangeDate: (date: Date) => void;
};

const initialState = {
  mode: 'date',
  visible: false,
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case 'open':
      return {
        mode: action.mode,
        visible: true,
      };
    case 'close':
      return {
        ...state,
        visible: false,
      };
    default:
      throw new Error(`Unhandled action type : ${action.type}`);
  }
};

const WriteHeader = ({ onSave, onAskRemove, isEditing, date, onChangeDate }: WriteHeaderProps) => {
  const navigation = useNavigation();
  const onGoBack = () => {
    navigation.goBack();
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const open = (mode: string) => dispatch({ type: 'open', mode });
  const close = () => dispatch({ type: `close` });

  const onConfirm = (selectedDate: Date) => {
    close();
    onChangeDate(selectedDate);
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <TransparentCircleButton onPress={onGoBack} name='arrow-back-outline' color='#FB7185' />
      </View>
      <View style={styles.buttons}>
        {isEditing && (
          <TransparentCircleButton onPress={onAskRemove} name='trash-sharp' color='#FB7185' hasMarginRight />
        )}
        <TransparentCircleButton onPress={onSave} name='checkmark-outline' color='#FB7185' />
      </View>
      <View style={styles.center}>
        <Pressable onPress={() => open('date')}>
          <Text>
            {format(new Date(date), 'PPP', {
              locale: ko,
            })}
          </Text>
        </Pressable>
        <View style={styles.separator} />
        <Pressable onPress={() => open('time')}>
          <Text>{format(new Date(date), 'p', { locale: ko })}</Text>
        </Pressable>
      </View>
      <DateTimePickerModal
        isVisible={state.visible}
        mode={state.mode}
        onConfirm={onConfirm}
        onCancel={close}
        date={date}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 56,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconButtonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: 8,
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: -1,
    flexDirection: 'row',
  },
  separator: {
    width: 8,
  },
});

export default WriteHeader;
