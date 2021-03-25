
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { AtSignIcon, CalendarIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const EventItemCard = ({title,location,date, image}) => {

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(",", "\n");
  return (
    <Box
    mt={"-100px"}
    bg="#272627"
    // h={"12rem"}
    w={"30%"}
    borderRadius="md"
    >
      <Flex>
        <Box p="6">
          <Image
          src={`/${image}`}
          height={200}
          width={200}
        />
        </Box>
        <Box
        display="flex"
        alignItems="center"
        color="#D24A8F"
        fontSize="18px"
        >
          <Box p={5}>
            <Box mb={5}>
              <CalendarIcon/>
              <Text>
                {humanReadableDate}
              </Text>
            </Box>
            <Box>
              <AtSignIcon/>
              <Text>
                {formattedAddress}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  )
}

export default EventItemCard
