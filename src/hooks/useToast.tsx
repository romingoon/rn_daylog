import React, { useCallback } from 'react';
import Toast from 'react-native-toast-message';

const useToast = (text: string, type: string) => {
  Toast.show({
    text1: text,
    type: type,
    position: 'bottom',
    bottomOffset: 60,
    visibilityTime: 2000,
  });
};

export default useToast;
