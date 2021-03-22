import { Box, Center, Heading } from '@chakra-ui/layout'
import React from 'react'

const MessageBox = (props) => {
  return (
    <Center>
      <Box
      bg="red"
      my={50}
      p={10}
      color="white"
      borderRadius="lg"
      >
        <Heading>
          {props.children}
        </Heading>
        
      </Box>
    </Center>
  )
}

export default MessageBox
