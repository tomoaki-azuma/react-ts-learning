import { useState } from 'react';
import axios from 'axios';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { User } from 'types/api/user';
import { useLoginUser } from './useLoginUser';
import { useMessage } from './useMessage';

export interface LoginObj {
  login: (id: string) => void;
  loading: boolean;
}

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return typeof u?.id === 'number' && typeof u?.name === 'string';
};

export const useAuth = (): LoginObj => {
  const navigate: NavigateFunction = useNavigate();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();

  const login = (id: string) => {
    setLoading(true);
    axios
      .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        if (isUser(res.data)) {
          const isAdmin = res.data.id === 10;
          setLoginUser({ ...res.data, admin: isAdmin });
          showMessage({ title: 'Login Success', status: 'success' });
          navigate('/home');
        } else {
          showMessage({ title: 'idが正しくありません', status: 'warning' });
        }
      })
      .catch(() => {
        showMessage({ title: 'ログインに失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { login, loading };
};
