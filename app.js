import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";

const app = express();

app.use(helmet()); // 보안을 위한것
app.set("view engine", "ejs"); // 프론트는 ejs
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/", globalRouter);
app.use("/user", userRouter);

export default app;
