
import express from "express"
//import { login, logout, signup } from "../controllers/user.controller.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/",protectRoute, getUsersForSidebar)

export default router;