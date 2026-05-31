import { createContext, useContext, useState, ReactNode } from 'react';

interface PasscodeContextType {
  isAuthenticated: boolean;
  authenticate: (passcode: string) => boolean;
}

const PasscodeContext = createContext<PasscodeContextType | undefined>(undefined);

export function PasscodeProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = (passcode: string) => {
    if (passcode === '123454321') {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <PasscodeContext.Provider value={{ isAuthenticated, authenticate }}>
      {children}
    </PasscodeContext.Provider>
  );
}

export function usePasscode() {
  const context = useContext(PasscodeContext);
  if (context === undefined) {
    throw new Error('usePasscode must be used within a PasscodeProvider');
  }
  return context;
}
