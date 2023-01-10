import { useCallback } from 'react';
import { useToast } from '@chakra-ui/react';

interface MessageProps {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error';
}

interface Ret {
  showMessage: (props: MessageProps) => void;
}

export const useMessage = (): Ret => {
  const toast = useToast();

  const showMessage = useCallback(
    (props: MessageProps) => {
      const { title, status } = props;
      toast({
        title,
        position: 'top',
        status,
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );

  return { showMessage };
};
