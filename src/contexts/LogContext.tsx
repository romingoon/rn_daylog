import { createContext, useState } from 'react';

const LogContext = createContext({});

export function LogContextProvider({ children }: any) {
  const [text, setText] = useState('');
  return <LogContext.Provider value={{ text, setText }}>{children}</LogContext.Provider>;
}

export default LogContext;
