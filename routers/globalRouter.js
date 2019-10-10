import express from "express";
import { postJoin } from "../controllers/userController";
import routes from "../routes";
import {
  homeController,
  loginController
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.login, loginController);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
