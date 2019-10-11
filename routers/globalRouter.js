import express from "express";
import { postJoin } from "../controllers/userController";
import routes from "../routes";
import {
  homeController,
  getLoginController,
  postLoginController
} from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home, homeController);
globalRouter.get(routes.login, getLoginController);
globalRouter.post(routes.login, postLoginController);
globalRouter.post(routes.join, postJoin);

export default globalRouter;
