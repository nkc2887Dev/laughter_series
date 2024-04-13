import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import User from "../models/user";
import { JWT } from "./constants/userConstant";

export = (passport: any) => {
  let opts: any = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = JWT.SECRET;

  passport.use(
    new JwtStrategy(opts, async (jwt_payload: any, done: any) => {
      try {
        const user = await User.findOne({ email: jwt_payload.email });
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        return done(error, false);
      }
    }),
  );
};
