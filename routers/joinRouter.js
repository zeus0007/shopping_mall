import express from "express";
import routes from "../routes";
import {
  join_buyerController,
  join_sellerController,
  joinController,
  term_buyerController,
  term_sellerController
} from "../controllers/joinController";

const joinRouter = express.Router();

joinRouter.get(routes.home, joinController);
joinRouter.get(routes.join_buyer, join_buyerController);
joinRouter.get(routes.join_seller, join_sellerController);
joinRouter.get(routes.term_buyer, term_buyerController);
joinRouter.get(routes.term_seller, term_sellerController);

export default joinRouter;
