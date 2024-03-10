import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: ''
});
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js"
import connectDB from "./db/index.js";

const app = express();

app.use(express.json());




connectDB()
.then( () => {
  app.listen(process.env.PORT || 3001,() => {
    console.log(`server running on port 3000!!`);
  })
  console.log("Connected to MongoDB successfully")
})
.catch( (err) => {
  console.log("ERRR", err)
})



app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

export {app}