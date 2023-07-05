import React, { useEffect, useRef } from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useToast from '../hooks/useToast';
import logsStorage from '../storages/logsStorage';

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
  logs?: LogContextProps[];
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
  const initailLogsRef = useRef(null);
  const [logs, setLogs] = useState<LogContextProps[]>([]);

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

  useEffect(() => {
    //useEffect 내에서 async 함수를 만들고 바로 호출하는 패턴
    (async () => {
      const savedLogs = await logsStorage.getLogs();
      if (savedLogs) {
        initailLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  useEffect(() => {
    if (logs === initailLogsRef.current) return;
    logsStorage.setLogs(logs);
  }, [logs]);

  return <LogContext.Provider value={{ logs, onCreate, onModify, onRemove }}>{children}</LogContext.Provider>;
}

export default LogContext;
