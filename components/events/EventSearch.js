import {useRef} from 'react';
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Box, Center, Flex } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const EventSearch = (props) => {
  const yearInputRef = useRef();
  const monthInputRef = useRef();


  const submitHandler = (e) =>{
    e.preventDefault();
    const selectedYear = yearInputRef.current.value;
    const selectedMonth = monthInputRef.current.value;
    props.onSearch(selectedYear, selectedMonth);
  }

  return (
    <Center my={5}>
      <Box as="form" onSubmit={submitHandler}>
        <Flex>
          <FormControl display="flex" flexDirection="row">
            <FormLabel lineHeight={10}>Year</FormLabel>
            <Select placeholder="Year" ref={yearInputRef}>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </Select>
          </FormControl>
          <FormControl display="flex" flexDirection="row">
            <FormLabel ml={2} lineHeight={10}>
              Month
            </FormLabel>
            <Select placeholder="Month" ref={monthInputRef}>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </Select>
          </FormControl>
          <IconButton type="submit" aria-label="Query Search" ml={2} icon={<SearchIcon />} />
        </Flex>
      </Box>
    </Center>
  );
};

export default EventSearch;
