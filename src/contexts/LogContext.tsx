import React from 'react';
import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface LogContextType {
  logs: onCreateProps[];
  onCreate: (data: onCreateProps) => void;
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
  const [logs, setLogs] = useState<onCreateProps[]>([]);

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
