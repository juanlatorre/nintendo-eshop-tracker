import { Flex, FlexProps } from "@chakra-ui/react";

import type { FC } from "react";

export const Card: FC<FlexProps> = ({ children, ...props }) => {
  return (
    <Flex
      mt="2em"
      bg="white"
      rounded="1em"
      px="3em"
      py="2em"
      shadow="xl"
      direction="column"
      {...props}
    >
      {children}
    </Flex>
  );
};
