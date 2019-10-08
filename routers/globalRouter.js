import express from "express";
import { home } from "../controllers/globalController";
import { postJoin } from "../controllers/userController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.post("/join", postJoin);

export default globalRouter;
