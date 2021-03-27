const handler = (req, res) => {
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
    }
    const newComment = {
      id: new Date().toISOString(),
      email,
      name,
      comment,
    };
    res.status(201).json({ message: "added comment", comment: newComment });
  } else if (req.method === "GET") {
    const dummyList = [
      { id: "c1", name: "Josh", comment: "First Comment" },
      { id: "c2", name: "Posh", comment: "Second Comment" },
    ];
    res.status(200).json({ comments: dummyList });
  }
};

//This code is a must!
export default handler;
