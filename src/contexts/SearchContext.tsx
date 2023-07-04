import React, { createContext, useState } from 'react';
export type SearchContextType = {
  keyword: string;
  onChangeText: (text: string) => void;
};

const SearchContext = createContext<SearchContextType>({
  keyword: '',
  onChangeText: () => {},
});

export function SearchContextProvider({ children }: { children: React.ReactNode }) {
  const [keyword, onChangeText] = useState('');

  return <SearchContext.Provider value={{ keyword, onChangeText }}>{children}</SearchContext.Provider>;
}

export default SearchContext;
