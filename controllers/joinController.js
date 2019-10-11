import { term_sellers } from "../models/TermSeller";
import { term_buyers } from "../models/TermBuyer";
import { user_buyers } from "../models/UserBuyer";
import { user_sellers } from "../models/UserSeller";
import routes from "../routes";

export const joinController = (req, res) => {
  res.render("join");
};

// Join Buyer
export const getjoinBuyerController = (req, res) => {
  res.render("join_buyer");
};
export const postjoinBuyerController = async (req, res, next) => {
  const {
    body: { email, name, address, phoneNumber, password, password2 }
  } = req;
  try {
    if (password === password2) {
      const BuyerUser = await user_buyers.create({
        user_email: email,
        name,
        password,
        address,
        phone: phoneNumber
      });
      console.log("user에 들어갈 내용", BuyerUser);
      next();
    } else {
      res.status(400);
      res.render("join_seller");
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.join_buyer);
  }
};

//Join Seller
export const getJoinSellerController = (req, res) => {
  res.render("join_seller");
};
export const postJoinSellerController = async (req, res, next) => {
  const {
    body: {
      email,
      name,
      address,
      phoneNumber,
      sellerNumber,
      password,
      password2
    }
  } = req;
  try {
    if (password === password2) {
      const sellerUser = await user_sellers.create({
        user_email: email,
        name,
        password,
        seller_number: sellerNumber,
        address,
        phone: phoneNumber
      });
      console.log("user에 들어갈 내용", sellerUser);
      next();
    } else {
      res.status(400);
      res.render("join_seller");
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.join_seller);
  }
};

//Term Buyer
export const getTermBuyerController = (req, res) => {
  res.render("term_buyer");
};
export const postTermBuyerController = async (req, res, next) => {
  const {
    body: { chk2 }
  } = req;
  try {
    let term_check1 = 0;
    let term_check2 = 0;
    if (chk2 === "emailChecked") {
      term_check1 = 1;
      term_check2 = 1;
    } else {
      term_check1 = 1;
      term_check2 = 0;
    }
    const buyerUserTerm = await term_buyers.create({
      term_agree: term_check1,
      email_agree: term_check2
    });
    console.log("term 안에 있는 내용 : ", buyerUserTerm);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

//Term Seller
export const getTermSellerController = (req, res) => {
  res.render("term_seller");
};
export const postTermSellerController = async (req, res, next) => {
  const {
    body: { chk2 }
  } = req;
  try {
    let term_check1 = 0;
    let term_check2 = 0;
    if (chk2 === "emailChecked") {
      term_check1 = 1;
      term_check2 = 1;
    } else {
      term_check1 = 1;
      term_check2 = 0;
    }
    const sellerUserTerm = await term_sellers.create({
      term_agree: term_check1,
      email_agree: term_check2
    });
    console.log("term 안에 있는 내용 : ", sellerUserTerm);
    next();
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
