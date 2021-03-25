import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";

const Footer = () => {
  return (
    <Box
    mt={100}
    bg="black"
    height={150}
    p={25}
    color="white"
    >
      <Text textAlign="center">
        © 2021 Joshua Christian Saturno. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
