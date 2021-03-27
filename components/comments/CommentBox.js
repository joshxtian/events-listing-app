import { Box, Flex, ListItem, Text } from '@chakra-ui/layout'
import React from 'react'

const CommentBox = ({name,id,content}) => {
  return (
    <ListItem
    py={5}
    width={700}
    height={138}
    borderBottom="1px solid black"
    _last={{borderBottom:"none"}}
    >
      <Flex
      flexDirection="column"
      >
        <Box>
          <Text>
            {content}
          </Text>
        </Box>
        <Box>
          <Text textAlign="end">
            {name}
          </Text>
        </Box>
      </Flex>
    </ListItem>
  )
}

export default CommentBox
