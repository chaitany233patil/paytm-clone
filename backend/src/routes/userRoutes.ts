import { Router } from "express";
import { signup, signin } from "../controllers/authController";
import { getBalance, transfer } from "../controllers/accountController";
import { auth } from "../middleware";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);

router.get("/balance", auth, getBalance);
router.post("/transfer", auth, transfer);

export default router;
