import { FC, useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { User } from 'types/api/user';

interface UserModalProps {
  user: User | undefined;
  isOpen: boolean;
  onClose: () => void;
  isAdmin?: boolean;
  users: User[];
  setUsers: (uses: User[]) => void;
}

export const UserDetailModal: FC<UserModalProps> = (props) => {
  const { user, isOpen, onClose, isAdmin = false, users, setUsers } = props;
  const [editUser, setEditUser] = useState<User>(
    user ?? {
      id: 0,
      name: '',
      username: '',
      email: '',
      phone: '',
    }
  );

  const onChangeEditName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const targetName = e.target.name;
    if (user !== undefined) {
      setEditUser({ ...editUser, [targetName]: e.target.value });
    }
  };

  const upDateUsers = () => {
    const newAllUsers = users.map((prevUser) => {
      if (prevUser.id === editUser.id) {
        return editUser;
      }

      return prevUser;
    });
    setUsers(newAllUsers);
    onClose();
  };

  useEffect(() => {
    setEditUser(
      user ?? {
        id: 0,
        name: '',
        username: '',
        email: '',
        phone: '',
      }
    );
  }, [user]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input
                value={editUser?.name}
                isReadOnly={!isAdmin}
                onChange={onChangeEditName}
                name={'name'}
              />
            </FormControl>
            <FormControl>
              <FormLabel>FullName:</FormLabel>
              <Input
                value={editUser?.username}
                isReadOnly={!isAdmin}
                onChange={onChangeEditName}
                name={'username'}
              />
            </FormControl>
            <FormControl>
              <FormLabel>email:</FormLabel>
              <Input
                value={editUser?.email}
                isReadOnly={!isAdmin}
                onChange={onChangeEditName}
                name={'email'}
              />
            </FormControl>
            <FormControl>
              <FormLabel>phone:</FormLabel>
              <Input
                value={editUser?.phone}
                isReadOnly={!isAdmin}
                onChange={onChangeEditName}
                name={'phone'}
              />
            </FormControl>
          </Stack>
        </ModalBody>

        <ModalFooter>
          {isAdmin && (
            <Button colorScheme="blue" mr={3} onClick={upDateUsers}>
              更新
            </Button>
          )}
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
