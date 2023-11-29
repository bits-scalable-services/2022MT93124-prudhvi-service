import express from "express";
const router = express.Router();

import User from "../controllers/user.controller.js";

router.route('/fetch').get(User.fetchUsers);

router.route('/create').post(User.userCreation);

export default router;