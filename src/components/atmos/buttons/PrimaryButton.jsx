import { Button } from "@chakra-ui/react";
import { memo, ReactNode, VFC } from "react";

export const PrimaryButton = memo((props) => {
  const { children, onClick, disbled = false, loading = false } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      disabled={disbled || loading}
    >
      {children}
    </Button>
  );
});
