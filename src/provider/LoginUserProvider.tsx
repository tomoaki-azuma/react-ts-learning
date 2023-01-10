import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  FC,
  useState,
} from 'react';
import { User } from 'types/api/user';

type LoginUser = User & { admin: boolean };

export interface LoginUserContextType {
  loginUser: LoginUser | undefined;
  setLoginUser: Dispatch<SetStateAction<LoginUser | undefined>>;
}

interface LoginUserProviderProps {
  children: ReactNode;
}

export const LoginUserContext = createContext<LoginUserContextType>({
  loginUser: undefined,
  setLoginUser: () => ({}),
});

export const LoginUserProvider: FC<LoginUserProviderProps> = (props) => {
  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser>();

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  );
};
