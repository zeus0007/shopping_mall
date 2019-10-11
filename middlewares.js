import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.sitName = "Shopping Mall";
  res.locals.routes = routes;
  next();
};
