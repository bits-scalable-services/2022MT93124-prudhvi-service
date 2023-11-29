import express from "express";
const router = express.Router();

import userRoute from "../microservices/user/routes/user.route.js";
import chatRoute from "../microservices/AI/routes/chatbot.route.js";

router.use('/user', userRoute);

router.use('/chat', chatRoute);

export default router;
