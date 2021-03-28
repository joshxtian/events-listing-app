import {MongoClient} from 'mongodb';

const handler = async (req,res) =>{
  if(req.method === "POST"){
    const {email} = req.body;
    if(!email || !email.includes("@")){
      res.status(422).json({message:'Invalid Email Address'});
      return;
    }
    else{
      const client = await MongoClient.connect("mongodb+srv://admin-josh:jamieisdabomb99@cluster0.5ge51.mongodb.net/EventDB?retryWrites=true&w=majority",{
        useUnifiedTopology:true
      });
      const db = client.db();
      
      const foundEmail = await db.collection('emails').findOne({email});

      if(foundEmail){
        res.status(400).json({message:'Email is already subscribed'});
        client.close();
      }
      else{
        await db.collection('emails').insertOne({
          email:email
        });
        client.close();
        res.status(201).json({message:'Successful!'})
      }
    }
  }
}

export default handler;