import { useCallback, useState } from 'react';
import { User } from '../types/api/user';

interface Props {
  id: number;
  users: User[];
}

interface RetUserSelect {
  selectedUser: User | undefined;
  onSelectUser: (props: Props) => void;
}

export const useSelectUser = (): RetUserSelect => {
  const [selectedUser, setSelectedUser] = useState<User | undefined>(undefined);

  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser: User | undefined = users.find((user) => {
      return user.id === id;
    });
    setSelectedUser(targetUser);
  }, []);

  return { selectedUser, onSelectUser };
};
