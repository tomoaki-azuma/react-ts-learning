import { memo, FC, useState, ChangeEvent } from 'react';
import { Flex, Box, Heading, Divider, Input, Stack } from '@chakra-ui/react';
import { useAuth } from 'hooks/useAuth';
import { PrimaryButton } from 'components/atoms/button/PrimaryButton';

export const Login: FC = memo(() => {
  const [userID, setUserID] = useState<string>('');
  const { login, loading } = useAuth();

  const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) => {
    setUserID(e.target.value);
  };

  const onClickLogin = () => {
    login(userID);
  };

  return (
    <Flex align="center" justify={'center'} height="100vh">
      <Box bg="white" w="sm" p={4} borderRadius={'md'} shadow="md">
        <Heading as="h1" size="lg" textAlign={'center'}>
          ユーザ管理アプリ
        </Heading>
        <Divider my={4} />
        <Stack spacing={5} px={10}>
          <Input
            placeholder="UserID"
            value={userID}
            onChange={onChangeUserID}
          />
          <PrimaryButton
            onClick={onClickLogin}
            loading={loading}
            disabled={userID === ''}
          >
            Login
          </PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
