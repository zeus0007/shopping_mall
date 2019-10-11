import routes from "../routes";
import { user_buyers } from "../models/UserBuyer";
import { user_sellers } from "../models/UserSeller";

export const homeController = (req, res) => {
  res.render("home");
};
export const getLoginController = (req, res) => {
  res.render("login");
};
export const postLoginController = async (req, res) => {
  const {
    body: { email, password }
  } = req;
  try {
    const Login = await user_buyers.findOne({ where: { user_email: email } });

    //구매 회원이 아닐경우
    if (Login === null) {
      const Login2 = await user_sellers.findOne({
        where: { user_email: email }
      });
      if (Login2 === null) {
        res.status(400);
        console.log("없는 회원입니다.");
        res.render(routes.login);
      } else {
        const userPassword = Login2.dataValues.password;

        // 비밀번호 일치 확인
        if (password === userPassword) {
          console.log("로그인 완료!");
          res.redirect(routes.home, { Username: Login2.dataValues.name });
        } else {
          console.log("비밀번호가 틀렸습니다.");
          res.redirect(routes.login);
        }
      }
    } else {
      // 구매 회원일 경우
      // 비밀번호 일치 확인
      if (password === Login.dataValues.password) {
        console.log("로그인 완료!");
        res.render(routes.home, { Username: Login2.dataValues.name });
      } else {
        console.log("비밀번호가 틀렸습니다.");
        res.redirect(routes.login);
      }
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.login);
  }
};
