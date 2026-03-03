import express from "express"
import { login, logOut, signUP } from "../controllers/auth.contoller.js"

const authRouter = express.Router()
authRouter.post("/signup",signUP)
authRouter.post("/signin",login)
authRouter.get("/logout",logOut)
export default authRouter