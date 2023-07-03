import React from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface LogContextType {
  logs: onCreateProps[];
  onCreate: (data: onCreateProps) => void;
  onScrolledToBottom?: (isBottom: boolean) => void;
}

export type onCreateProps = {
  id?: string;
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
});

export function LogContextProvider({ children }: any) {
  const [logs, setLogs] = useState<onCreateProps[]>(
    Array.from({ length: 10 })
      .map((_, index) => ({
        id: uuidv4(),
        title: `title ${index}`,
        body: `body ${index}`,
        date: new Date().toISOString(),
      }))
      .reverse()
  );

  const onCreate = ({ title, body, date }: onCreateProps) => {
    const log: onCreateProps = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs((prevLogs) => [log, ...prevLogs]);
  };

  return <LogContext.Provider value={{ logs, onCreate }}>{children}</LogContext.Provider>;
}

export default LogContext;
