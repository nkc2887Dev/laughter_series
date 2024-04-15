import express from "express"
import userRoutes from "./user"
import jokesRoutes from "./jokes"

const routes = express.Router()

routes.use("/user", userRoutes)
routes.use("/jokes", jokesRoutes)

export = routes