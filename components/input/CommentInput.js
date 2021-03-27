import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Center, HStack, Stack, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import React, { useRef, useState } from "react";

const CommentInput = (props) => {
  const emailInput = useRef();
  const nameInput = useRef();
  const commentInput = useRef();
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!emailInput || !nameInput || !commentInput) {
      setMessage("Please complete the fields above!");
    } else {
      props.submitComment({
        email: emailInput.current.value,
        name: nameInput.current.value,
        comment: commentInput.current.value,
      });
    }
  };
  return (
    <Center>
      <Box bg="#272627" borderRadius={5} w="100%" p={5} color="white">
        <form onSubmit={submitHandler}>
          <Stack>
            <HStack spacing={10}>
              <FormControl id="email">
                <FormLabel>Your Email</FormLabel>
                <Input
                  input="email"
                  placeholder="Enter Your Email"
                  ref={emailInput}
                  isRequired
                />
              </FormControl>
              <FormControl id="name">
                <FormLabel>Your Name</FormLabel>
                <Input
                  input="text"
                  placeholder="Enter Your Name"
                  ref={nameInput}
                  isRequired
                />
              </FormControl>
            </HStack>
            <Box>
              <FormControl id="comment" onSubmit={(e) => submitHandler(e)}>
                <FormLabel>Your Comment</FormLabel>
                <Textarea
                  placeholder="Say Something"
                  resize="none"
                  rows={10}
                  ref={commentInput}
                  isRequired
                />
              </FormControl>
              {message && <Text>message</Text>}
              <Button type="submit" float="right" mt={3} variant="outline">
                Submit
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default CommentInput;
