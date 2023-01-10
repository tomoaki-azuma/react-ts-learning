import { memo, FC } from 'react';
import { Box, Flex, Heading, Link, useDisclosure } from '@chakra-ui/react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { MenuIconButton } from 'components/atoms/button/MenuIconButton';
import { MenuDrawer } from 'components/molecules/MenuDrawer';

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate: NavigateFunction = useNavigate();

  const onClickMenuLink = (url: '' | '/settings' | '/user_management') => {
    return () => {
      navigate(`/home${url}`);
    };
  };

  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          as="a"
          align="center"
          mr={8}
          _hover={{ cursor: 'pointer' }}
          onClick={onClickMenuLink('')}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザ管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr="4">
            <Link onClick={onClickMenuLink('/user_management')}>
              ユーザ一覧
            </Link>
          </Box>
          <Box pr="4">
            <Link onClick={onClickMenuLink('/settings')}>設定</Link>
          </Box>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        isOpen={isOpen}
        onClose={onClose}
        onClickMenuLink={onClickMenuLink}
      />
    </>
  );
});
