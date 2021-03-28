import { MongoClient } from "mongodb";

//Connecting to DB
export const connectDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://admin-josh:jamieisdabomb99@cluster0.5ge51.mongodb.net/EventDB?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
    }
  );
  return client;
};

//for Emails subscription
export const insertDocument = async (client, document) => {
  const db = client.db();
  const foundEmail = await db.collection("emails").findOne(document);

  if (foundEmail) {
    throw new Error("This email is already registered");
  } else {
    await db.collection("emails").insertOne(document);
  }
};

//Inserting new comment
export const insertNewComment = async (client, document) => {
  const db = client.db();
  await db.collection("comments").insertOne(document);
};

//Getting All Comments By Id
export const getEventCommentById = async (client, eventId) => {
  const db = client.db();
  const comments = await db
    .collection("comments")
    .find({ eventId })
    .sort({ id: -1 })
    .toArray();
  return comments;
};
