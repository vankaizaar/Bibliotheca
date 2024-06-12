import {createContext, ReactNode, useContext, useState} from 'react';
import {ReadingList} from '../components/ReadingList.tsx';
import {useLocalStorage} from '../hooks/useLocalStorage.ts';

type ReadingListProviderProps = {
  children: ReactNode
};

type ReadingListItem = {
  id: number
  quantity: number
};


type ReadingListContext = {
  openReadingList: () => void
  closeReadingList: () => void
  readingListQuantity: number
  readingListItems: ReadingListItem[]
  getBookQuantity: (id: number) => number
  addBook: (id: number) => void
  removeBook: (id: number) => void
};

const ReadingListContext = createContext({} as ReadingListContext);

export function useReadingList() {
  return useContext(ReadingListContext);
}


export function ReadingListProvider({children}: ReadingListProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [readingListItems, setReadingListItems] = useLocalStorage<ReadingListItem[]>('reading-list', []);
  const readingListQuantity = readingListItems.reduce((acc, item) => acc + item.quantity, 0);

  const openReadingList = () => setIsOpen(true);
  const closeReadingList = () => setIsOpen(false);

  function getBookQuantity(id: number) {
    return readingListItems.find(item => item.id === id)?.quantity || 0;
  }

  function addBook(id: number) {
    setReadingListItems(prevItems => [
      ...prevItems,
      {id, quantity: 1}
    ]);
  }

  function removeBook(id: number) {
    setReadingListItems(prevItems => prevItems.filter(item => item.id !== id));
  }


  return (
    <ReadingListContext.Provider value={{
      getBookQuantity,
      addBook,
      removeBook,
      readingListItems,
      readingListQuantity,
      openReadingList,
      closeReadingList
    }}>
      {children}
      <ReadingList isOpen={isOpen}/>
    </ReadingListContext.Provider>
  );
}