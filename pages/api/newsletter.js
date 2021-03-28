import { MongoClient } from "mongodb";

const connectDB = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://admin-josh:jamieisdabomb99@cluster0.5ge51.mongodb.net/EventDB?retryWrites=true&w=majority",
    {
      useUnifiedTopology: true,
    }
  );
  return client;
};

const insertDocument = async (client, document) => {
  const db = client.db();
  const foundEmail = await db.collection('emails').findOne(document);

  if(foundEmail){
    throw new Error("This email is already registered");
  }
  else{
    await db.collection("emails").insertOne(document);
  }
  
  
};

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid Email Address" });
      return;
    } else {
      let client;
      try {
        client =  await connectDB();
      } catch (error) {
        res.status(500).json({ message: "Connecting to the database failed!" });
        return;
      }

      try {
        await insertDocument(client, {
          email: email,
        });
        res.status(201).json({ message: "Successful!" });
        client.close();
      } catch (error) {
        res.status(500).json({ message: `${error.message}` });
      }
    }
  }
};

export default handler;
