import { FC, ReactNode, useContext, useState } from 'react';
import { createContext } from 'react';

type ShareMessageContextType = {
  toggleShareMessage: () => void;
  isShareMessageOpen: boolean;
  getId: ($id: string) => void;
  $id: string;
};

const ShareMessageContext = createContext<ShareMessageContextType | null>(null);

const ShareMessageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isShareMessageOpen, setIsShareMessageOpen] = useState(false);
  const [$id, setId] = useState('');
  const toggleShareMessage = () => {
    setIsShareMessageOpen((prevState) => !prevState);
  };
  const getId = ($id: string) => {
    setId($id);
  };
  return (
    <ShareMessageContext.Provider
      value={{ toggleShareMessage, isShareMessageOpen, getId, $id }}
    >
      {children}
    </ShareMessageContext.Provider>
  );
};

export const useShareMessageProvider = () => {
  const { isShareMessageOpen, toggleShareMessage, getId, $id } = useContext(
    ShareMessageContext
  ) as ShareMessageContextType;
  return { isShareMessageOpen, toggleShareMessage, getId, $id };
};

export default ShareMessageProvider;
