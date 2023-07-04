import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import TransparentCircleButton from './ TransparentCircleButton';

type WriteHeaderProps = {
  onSave: () => void;
  onAskRemove: () => void;
  isEditing: boolean;
};

const WriteHeader = ({ onSave, onAskRemove, isEditing }: WriteHeaderProps) => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
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
});

export default WriteHeader;
