import express from "express"
const routes = express.Router()

routes.post("/create", ()=>{})
routes.get("/login", ()=>{})
routes.put("/forgot-password", ()=>{})
routes.get("/profile", ()=>{})

export = routes