import { Image } from "@chakra-ui/image";
import { Heading } from "@chakra-ui/layout";
import { Text, Header, Flex, Box, ListItem } from "@chakra-ui/layout";
import Link from "next/link";

const EventItem = ({
  id,
  title,
  description,
  location,
  date,
  image,
  isFeatured,
}) => {
  console.log(title, description);

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  return (
    <ListItem my={5} w={650}>
      <Box 
      boxShadow="dark-lg" 
      rounded="md" 
      overflow="hidden">
        <Flex>
            <Box
              h={"12rem"}
              w={"40%"}
              backgroundImage={`url(/${image})`}
              backgroundSize="cover"
              backgroundPosition="center"
            >
            </Box>
          <Box 
          p={4}
          w={"60%"}>
              <Heading as="h3" fontSize="1.5rem" mb="3">{title}</Heading>
              <Text mb="3" fontWeight="700">{humanReadableDate}</Text>
              <Text as="i" whiteSpace="pre">{formattedAddress}</Text>
              <Box textAlign="right">
                <Link href="">Explore Event</Link>
              </Box>
          </Box>
        </Flex>
      </Box>
    </ListItem>
  );
};

export default EventItem;
