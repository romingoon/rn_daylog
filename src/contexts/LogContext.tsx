import React from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Toast from 'react-native-toast-message';
import useToast from '../hooks/useToast';

export type LogContextType = {
  logs: LogContextProps[];
  onCreate: (data: LogContextProps) => void;
  onModify: (data: LogContextProps) => void;
  onRemove?: (id: string) => void;
  onScrolledToBottom?: (isBottom: boolean) => void;
};

export type LogContextProps = {
  id: string;
  title: string;
  body: string;
  date: string;
  log?: {
    id: string;
    title: string;
    body: string;
    date: string;
  };
};

const LogContext = createContext<LogContextType>({
  logs: [],
  onCreate: () => {},
  onModify: () => {},
  onRemove: () => {},
});

export function LogContextProvider({ children }: { children: React.ReactNode }) {
  const [logs, setLogs] = useState<LogContextProps[]>(
    Array.from({ length: 10 })
      .map((_, index) => ({
        id: uuidv4(),
        title: `title ${index}`,
        body: `body ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse()
  );

  const onCreate = ({ title, body, date }: LogContextProps) => {
    const log: LogContextProps = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs((prevLogs) => [log, ...prevLogs]);

    useToast('저장되었습니다.', 'success');
  };

  const onModify = (modified: LogContextProps) => {
    const nextLogs = logs.map((log) => (log.id === modified.id ? modified : log));
    setLogs(nextLogs);
    useToast('수정되었습니다.', 'success');
  };

  const onRemove = (id: string) => {
    const nextLogs = logs.filter((log) => log.id !== id);
    setLogs(nextLogs);
    useToast('삭제되었습니다.', 'success');
  };

  return <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>{children}</LogContext.Provider>;
}

export default LogContext;
