import { Router } from "express";
import { signup, signin } from "../controllers/authController";
import { getBalance, transfer } from "../controllers/accountController";
import { auth } from "../middleware";
import {
  getAllUSers,
  getRecevier,
  searchUsers,
} from "../controllers/userController";
import { me } from "../controllers/meController";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/me", auth, me);

router.get("/allusers", getAllUSers);
router.get("/bulk", searchUsers);
router.post("/receiver", getRecevier);

router.get("/balance", auth, getBalance);
router.post("/transfer", auth, transfer);

export default router;
