import Header from "./Header";
import Footer from "./Footer";

import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export function LayoutRoot({ children }: LayoutProps) {
  return (
    <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
      <Flex wrap="wrap" margin={6} minHeight="90vh">
        <Header />
        <Box width="full" as="main" marginY={5}>
          {children}
        </Box>
        <Footer />
      </Flex>
    </Box>
  );
}
