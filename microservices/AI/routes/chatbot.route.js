import express from "express";
const router = express.Router();

import Chat from '../controllers/chatbot.controller.js';

router.route('/').post(Chat.createChatMessage);

export default router;
