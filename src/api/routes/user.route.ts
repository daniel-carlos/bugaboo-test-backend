import { Router } from "express";
import { UserController } from "../controllers/UserController";

const bcrypt = require("bcrypt");
const router = Router();
const userController = new UserController();

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userController.findUserById(Number(id));
    res.json({
      ok: true,
      user,
    });
  } catch (error: any) {
    res.json({
      ok: false,
      msg: error.message,
    });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userController.deleteUser(id);
    res.json({
      ok: true,
      user,
    });
  } catch (error: any) {
    res.json({
      ok: false,
      msg: error.message,
    });
  }
});

router.post("/", async (req, res, next) => {
  const { username } = req.body;

  try {
    const user = await userController.createUser(username);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

// Exportar o roteador
export default {
  path: "/user",
  router,
};
