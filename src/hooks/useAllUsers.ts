import { useCallback, useState } from 'react';
import axios from 'axios';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

interface RetAllUsers {
  getUsers: () => void;
  loading: boolean;
  users: User[];
  setUsers: (users: User[]) => void;
}
export const useAllUsers = (): RetAllUsers => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<User[]>([]);
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<User[]>(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({ title: 'ユーザ取得に失敗しました', status: 'error' });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [showMessage]);

  return { getUsers, loading, users, setUsers };
};
