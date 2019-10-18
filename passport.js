import passport from "passport";
import { user_buyers } from "./models/UserBuyer";
import { user_sellers } from "./models/UserSeller";
("./models/UserSeller");
const LocalStrategy = require("passport-local").Strategy;

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new LocalStrategy(
      {
        usernameField: "user_email",
        passwordField: "password",
        session: true,
        passReqToCallback: false
      },
      (id, password, done) => {
        user_buyers.findOne({ id: id }, (findError, user) => {
          if (findError) return done(findError);
          if (!user)
            return done(null, false, { message: "존재하지 않는 아이디입니다" });
          return user.comparePassword(password, (passError, isMatch) => {
            if (isMatch) {
              return done(null, user);
            }
            return done(null, false, { message: "비밀번호가 틀렸습니다" });
          });
        });
      }
    )
  );
};
