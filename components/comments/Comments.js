import {Center} from "@chakra-ui/layout";
import React from "react";
import CommentInput from "../input/CommentInput";


const Comments = (props) => {
  const addCommentHandler = (comment) => {
    fetch(`/api/comments/${props.eventId}`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <Center>
        <CommentInput submitComment={addCommentHandler} />
      </Center>
      
    </>
  );
};

export default Comments;
