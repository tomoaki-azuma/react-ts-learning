import { memo, FC, ReactNode } from 'react';
import { Button } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}
export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, disabled = false, loading = false, onClick } = props;

  return (
    <Button
      bg="facebook.500"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disabled}
    >
      {children}
    </Button>
  );
});
