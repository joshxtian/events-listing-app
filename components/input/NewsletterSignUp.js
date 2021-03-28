import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { Box, Center } from "@chakra-ui/layout";
import { useState, useRef } from "react";

const NewsletterSignUp = () => {
  const email = useRef();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: email.current.value }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response=>response.json()).then(data=>data.message ? setMessage(data.message): setError(data.error))
  };
  return (
    <Center flexDir="column">
      <Box as="form" onSubmit={submitHandler}>
        <FormControl id="email" display="flex">
          <Input type="email" placeholder="Your Email" ref={email} />
          <Button type="submit" ml={1} colorScheme="blue" variant="solid">
            Register
          </Button>
        </FormControl>
      </Box>
      {message && <Text color="green">{message}</Text>}
      {error && <Text color="red">{error}</Text>}
    </Center>
  );
};

export default NewsletterSignUp;
