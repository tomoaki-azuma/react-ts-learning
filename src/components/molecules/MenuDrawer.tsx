import { memo, FC } from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Button,
} from '@chakra-ui/react';

interface Props {
  onClose: () => void;
  isOpen: boolean;
  onClickMenuLink: (url: '' | '/settings' | '/user_management') => () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen, onClickMenuLink } = props;

  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <Button w="100%" onClick={onClickMenuLink('')}>
              TOP
            </Button>
            <Button w="100%" onClick={onClickMenuLink('/user_management')}>
              ユーザ一覧
            </Button>
            <Button w="100%" onClick={onClickMenuLink('/settings')}>
              設定
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
});
