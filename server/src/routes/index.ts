import express from "express";
import routesAdmin from "./admin/index";
import routesClient from "./client/index";

const routes = express.Router();

routes.use("/admin", routesAdmin);
routes.use("/client", routesClient);

export = routes;
