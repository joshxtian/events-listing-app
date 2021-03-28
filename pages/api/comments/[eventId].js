import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  const eventId = req.query.eventId;

  const client = await MongoClient.connect(
    "mongodb+srv://admin-josh:jamieisdabomb99@cluster0.5ge51.mongodb.net/EventDB?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
    }
  );
  const db = client.db();
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
    } else {
      const newComment = {
        eventId: eventId,
        email,
        name,
        comment,
      };
      const commentData = await db.collection("comments").insertOne(newComment);
      res.status(201).json({ message: "added comment" });
    }
  } else if (req.method === "GET") {
    const comments = await db
      .collection("comments")
      .find({ eventId })
      .sort({ _id: -1 })
      .toArray();

    if (comments) {
      res.status(200).json({ comments: comments });
    } else {
      res.status(404).json({ message: "There are no comments" });
    }
  }
};

//This code is a must!
export default handler;
