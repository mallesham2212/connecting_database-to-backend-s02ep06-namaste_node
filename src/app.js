const express = require('express')
const  connectDb  = require('./config/database')
const app = express()
const User=require("./models/user");


app.post("/signup",async (req,res)=>{
	console.log("adding into database");
	const user=new User({
		firstName:"Chinaanan",
		lastName:"putti",
		Email:"s ncsbjhsjashkcb@gmail.com",
		password:"llahs"
	});
	await user.save();
	res.send("user added succesfully")

})
connectDb().then(()=>{
    console.log("connected to database");
	app.listen(4000, () => {
		console.log("server connecting...");
	})
}).catch((err)=>{
    console.error("data base cannot connected");
})


