import { createContext, ReactNode, useState } from 'react';

interface InviteContextValue {
  openSuccessDialog: boolean;
  setOpenSuccessDialog: (o: boolean) => void;
}

const InviteContext = createContext<InviteContextValue>({} as InviteContextValue);

const InviteContextProvider = ({ children }: { children: ReactNode }) => {
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  return (
    <InviteContext.Provider value={{ openSuccessDialog, setOpenSuccessDialog }}>
      {children}
    </InviteContext.Provider>
  );
};

export type { InviteContextValue };
export { InviteContext, InviteContextProvider };
