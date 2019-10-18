import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import path from "path";
import session from "express-session";
var MySQLStore = require("express-mysql-session")(session);

import userRouter from "./routers/userRouter";
import globalRouter from "./routers/globalRouter";
import joinRouter from "./routers/joinRouter";

const app = express();

app.use(helmet()); // 보안을 위한것
app.engine("ejs", require("express-ejs-extend"));
app.set("view engine", "ejs"); // 프론트는 ejs
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MySQLStore({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "shoppingmall"
    })
  })
);

app.use(localsMiddleware);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/join", joinRouter);

export default app;
