import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.put("/score", async (req, res, next) => {
  try {
    const { score, username } = req.body;
    userController.setScore(username, score);
    res.json({ msg: "ok" });
  } catch (error) {
    next(error);
  }
});

router.get("/highscores/:limit", async (req, res, next) => {
  try {
    const { limit } = req.params;
    const topUsers = await userController.getHighScores(Number(limit));
    res.json({
      ok: true,
      users: topUsers,
    });
  } catch (error: any) {
    res.json({
      ok: false,
      msg: error.message,
    });
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

router.get("/find/:username", async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await userController.findUserByUsername(username);

    if (user) {
      res.json({
        ok: true,
        user,
      });
    } else {
      res.json({
        ok: false,
        msg: "Usuário não encontrado",
      });
    }
  } catch (error: any) {
    res.json({
      ok: false,
      msg: error.message,
    });
  }
});

router.post("/findmany", async (req, res, next) => {
  try {
    const { usernames } = req.body;
    const users = await userController.findUsers(usernames);

    if (users) {
      res.json({
        ok: true,
        users,
      });
    } else {
      res.json({
        ok: false,
        msg: "Usuário não encontrado",
      });
    }
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
    res.json({ user: user, ok: true });
  } catch (error) {
    next(error);
  }
});

// Exportar o roteador
export default {
  path: "/user",
  router,
};
