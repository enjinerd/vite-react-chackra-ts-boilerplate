import { Box, Flex, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { ThemeToggle } from "components/ui";

const Header = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      py={4}
      position="sticky"
      top={0}
    >
      <Link to="/">
        <Heading as="h1" size="sm">
          vite-react-chakra-ts-boilerplate
        </Heading>
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
