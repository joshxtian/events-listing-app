import { Box, Flex, Heading } from "@chakra-ui/layout";
import Link from "next/link";

const Header = () => {
  return (
    <Box>
      <Flex
        bg="black"
        color="white"
        minH={"80px"}
        py={{ base: 2 }}
        px={{ base: 200 }}
        borderBottom={1}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} 
        justify={{ base: "center", md: "start" }}
        >
          <Link href="/">
            <Heading 
            size="lg"
            cursor="pointer"
            >
              Event App
            </Heading>
          </Link>
         
        </Flex>
        <Flex>
          <Link href="/events">
            See All Events
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
