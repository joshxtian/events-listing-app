import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box, Center } from "@chakra-ui/layout";
import { useState, useRef } from "react";

const NewsletterSignUp = () => {
  const email = useRef();
  
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email.current.value }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response=>response.json()).then(data=>console.log(data))
  };

  return (
    <Center>
      <Box as="form" onSubmit={submitHandler}>
        <FormControl id="email" display="flex">
          <Input type="email" placeholder="Your Email" ref={email} />
          <Button type="submit" ml={1} colorScheme="blue" variant="solid">
            Register
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
};

export default NewsletterSignUp;
