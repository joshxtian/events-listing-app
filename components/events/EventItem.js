import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/react";
import { Text, Header, Flex, Box, ListItem, Heading } from "@chakra-ui/layout";
import { InfoIcon, CalendarIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(",", "\n");

  const loadEventDetailsHandler = () => {
    router.push(`/events/${id}`);
  };

  return (
    <ListItem my={5} w={650}>
      <Box boxShadow="dark-lg" rounded="md" overflow="hidden">
        <Flex>
          <Box
            h={"12rem"}
            w={"40%"}
            backgroundImage={`url(/${image})`}
            backgroundSize="cover"
            backgroundPosition="center"
          ></Box>
          <Box p={4} w={"60%"}>
            <Heading as="h3" fontSize="1.5rem" mb="3">
              {title}
            </Heading>
            <Text mb="3" fontWeight="700">
              <CalendarIcon mr="auto" /> {humanReadableDate}
            </Text>
            <Text as="i" whiteSpace="pre">
              <InfoIcon mr="2" />
              {formattedAddress}
            </Text>
            <Box textAlign="right">
              <Button
                onClick={loadEventDetailsHandler}
                colorScheme="blue"
                rightIcon={<ArrowForwardIcon />}
                variant="solid"
                size="sm"
              >
                Explore Event
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </ListItem>
  );
};

export default EventItem;
