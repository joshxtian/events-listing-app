import {connectDB, getEventCommentById, insertNewComment} from '../../../helpers/db-utils';

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    // Server side Validation
    const { email, name, comment } = req.body;
    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "invalid input" });
      return;

    } else {
      let client;
      try {
        client = await connectDB();
      } catch (error) {
        res.status(500).json({message:error.message})
      }
      try{
        const newComment = {
          eventId: eventId,
          email,
          name,
          comment,
        };
        await insertNewComment(client,newComment)
        res.status(201).json({ message: "added comment" });
      }catch(error){
        res.status(500).json({message:"Failed to subscribe"})
      }
    
    }
  } 


  if (req.method === "GET") {
    const client = await connectDB();

    const comments = await getEventCommentById(client,eventId);
    if (comments) {
      res.status(200).json({ comments: comments });
    } else {
      res.status(404).json({ message: "There are no comments" });
    }
  }
};

//This code is a must!
export default handler;
