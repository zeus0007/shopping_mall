import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";

const app = express();

app.use(helmet()); // 보안을 위한것
app.set("view engine", "ejs");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

const handleHome = (req, res) => {
  res.send("Hello from home");
};

app.get("/", handleHome);
app.use("/user", userRouter);

export default app;
