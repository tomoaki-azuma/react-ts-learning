import { memo, FC, useEffect, useCallback } from 'react';
import {
  Center,
  Spinner,
  Wrap,
  WrapItem,
  useDisclosure,
} from '@chakra-ui/react';

import { useLoginUser } from 'hooks/useLoginUser';
import { useSelectUser } from 'hooks/useSelectUser';
import { UserCard } from 'components/organisms/user/UserCard';
import { UserDetailModal } from 'components/organisms/user/UserDetailModal';
import { useAllUsers } from '../../hooks/useAllUsers';

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users, setUsers } = useAllUsers();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { selectedUser, onSelectUser } = useSelectUser();
  const { loginUser } = useLoginUser();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users });
      onOpen();
    },
    [users, onOpen, onSelectUser]
  );

  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => {
            return (
              <WrapItem key={user.id} mx="auto">
                <UserCard
                  id={user.id}
                  imageUrl="http://source.unsplash.com/random"
                  userName={user.username}
                  fullName={user.name}
                  onClick={onClickUser}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      )}
      <UserDetailModal
        user={selectedUser}
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginUser?.admin}
        users={users}
        setUsers={setUsers}
      />
    </>
  );
});
