import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >
      <Text fontSize="sm">
        {new Date().getFullYear()} -{" "}
        <Link href="https://obi.codes" isExternal>
          obi.codes
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
