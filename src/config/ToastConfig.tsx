import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

const ToastConfig = {
  success: ({ ...props }: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#107C10' }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
      }}
    />
  ),
  error: ({ ...props }: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: '#D13438' }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
      }}
    />
  ),
  info: ({ ...props }: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#0078D7' }}
      contentContainerStyle={{ paddingHorizontal: 12 }}
      text1Style={{
        fontSize: 18,
        fontWeight: 'bold',
      }}
    />
  ),
};

export default ToastConfig;
