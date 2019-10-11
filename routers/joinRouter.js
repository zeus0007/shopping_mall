import express from "express";
import routes from "../routes";
import {
  joinController,
  getjoinBuyerController,
  postjoinBuyerController,
  postJoinSellerController,
  getJoinSellerController,
  getTermBuyerController,
  postTermBuyerController,
  getTermSellerController,
  postTermSellerController
} from "../controllers/joinController";
import { homeController } from "../controllers/globalController";

const joinRouter = express.Router();

joinRouter.get(routes.home, joinController);

joinRouter.get(routes.term_buyer, getTermBuyerController);
joinRouter.post(
  routes.term_buyer,
  postTermBuyerController,
  getjoinBuyerController
);

joinRouter.get(routes.term_seller, getTermSellerController);
joinRouter.post(
  routes.term_seller,
  postTermSellerController,
  getJoinSellerController
);

joinRouter.get(routes.join_buyer, getjoinBuyerController);
joinRouter.post(routes.join_buyer, postjoinBuyerController, homeController);

joinRouter.get(routes.join_seller, getJoinSellerController);
joinRouter.post(routes.join_seller, postJoinSellerController, homeController);

export default joinRouter;
