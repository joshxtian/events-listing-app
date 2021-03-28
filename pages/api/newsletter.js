import {connectDB, insertDocument} from '../../helpers/db-utils';


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
        res.status(500).json({ error: "Connecting to the database failed!" });
        return;
      }

      try {
        await insertDocument(client, {
          email: email,
        });
        res.status(201).json({ message: "Successful!" });
        client.close();
      } catch (error) {
        res.status(500).json({ error: `${error.message}` });
      }
    }
  }
};

export default handler;
