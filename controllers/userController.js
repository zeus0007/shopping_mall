import { UserUser } from "../models/User";

export const user = (req, res) => {
  res.send("UserIndex");
};

export const postJoin = async (req, res, next) => {
  const {
    body: { email, password }
  } = req;
  try {
    const user = await UserUser.create({
      useremail: email,
      password: password
    });
    console.log("유저 안에 있는 내용 : ", user);
    next();
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};
