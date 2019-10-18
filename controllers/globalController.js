import routes from "../routes";
import { users } from "../models/User";

export const homeController = (req, res) => {
  res.render("home");
};
export const getLoginController = (req, res) => {
  res.render("login");
};
export const postLoginController = async (req, res, next) => {
  const {
    body: { email, password }
  } = req;
  try {
    const Login = await users.findOne({
      where: { user_email: email }
    });
    console.log("asldfasdf", Login);
    //구매 회원이 아닐경우
    if (Login === null) {
      res.status(400);
      console.log("없는 회원입니다.");
      res.redirect(routes.login);
    } else {
      const userPassword = Login.dataValues.password;
      // 비밀번호 일치 확인
      if (password === userPassword) {
        req.session.is_logined = true;
        req.session.name = Login.dataValues.name;

        console.log("로그인 완료!");
        res.redirect(routes.home);
      } else {
        console.log("비밀번호가 틀렸습니다.");
        alert("비밀번호가 틀렸습니다.");
        res.redirect(routes.login);
      }
    }
  } catch (error) {
    console.log(error);
    res.redirect(routes.login);
  }
};

export const mypageController = (req, res) => {
  res.render("mypage");
};

export const logoutController = (req, res) => {
  req.session.destroy(function(err) {
    res.redirect(routes.home);
  });
};
