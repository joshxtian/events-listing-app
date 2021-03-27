import { List } from '@chakra-ui/layout'
import React from 'react'

const CommentsList = (props) => {
  return (
    <List>
      {props.children}
    </List>
  )
}

export default CommentsList
