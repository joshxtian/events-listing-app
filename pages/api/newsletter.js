const handler = (req,res) =>{
  if(req.method === "POST"){
    const {email} = req.body;
    if(!email || !email.includes("@")){
      res.status(422).json({message:'Invalid Email Address'});
      return;
    }
    else res.status(201).json({message:'Successful!'})
  }
}

export default handler;