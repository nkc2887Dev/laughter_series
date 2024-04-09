import express from "express";
const routes = express.Router();

routes.use("/admin", () => {});
routes.use("/client", () => {});

export = routes;
