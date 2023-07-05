import AsyncStorage from '@react-native-community/async-storage';
import { ja } from 'date-fns/locale';

const key = 'logs';

const logsStorage = {
  async getLogs() {
    try {
      const raw = await AsyncStorage.getItem(key);
      const parsed = JSON.parse(raw ?? '[]');
      return parsed;
    } catch (e) {
      throw new Error('Failed to load logs');
    }
  },
  async setLogs(data: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      throw new Error('Failed to save logs');
    }
  },
};

export default logsStorage;
