import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.post("/score/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { score } = req.body;
    userController.addScore(Number(id), score);
    res.json({ msg: "ok" });
  } catch (error) {
    next(error);
  }
});

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
