import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Pressable, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const WriteHeader = () => {
  const navigation = useNavigation();

  const onGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.block}>
      <View style={styles.iconButtonWrapper}>
        <Pressable style={styles.iconButton} onPress={onGoBack} android_ripple={{ color: 'white' }}>
          <Ionicons name='arrow-back-outline' size={24} color='#FB7185' />
        </Pressable>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.iconButtonWrapper, styles.marginRight]}>
          <Pressable style={[styles.iconButton]} android_ripple={{ color: 'white' }}>
            <Ionicons name='trash-outline' size={24} color='#FB7185' />
          </Pressable>
        </View>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.iconButtonWrapper, styles.marginRight]}>
          <Pressable style={[styles.iconButton]} android_ripple={{ color: 'white' }}>
            <Ionicons name='checkmark-outline' size={24} color='#FB7185' />
          </Pressable>
        </View>
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
