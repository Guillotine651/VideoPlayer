import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ limit: "20kb", extended: "true" }));
app.use(express.static("public"));
app.use(cookieParser());

export default app;

//routes declarataion
import userRouter from './routes/user.router.js'

app.use("/ap/v1/users",userRouter)

export {app}