import { prisma } from "../../app";

class UserController {
  findUserById = async (id: number) => {
    const userFound = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return userFound;
  };

  findUserByUsername = async (username: string) => {
    const userFound = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    return userFound;
  };

  addScore = async (id: number, score: number) => {
    const user = await prisma.user.findFirst({
      where: { id },
    });

    const prevScore = user?.score || 0;

    await prisma.user.update({
      where: { id },
      data: { score: prevScore + score },
    });
  };

  createUser = async (username: string) => {
    const userCreated = await prisma.user.create({
      data: {
        username,
      },
    });
    return userCreated;
  };

  deleteUser = async (id: string) => {
    const userDelete = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    return userDelete;
  };
}

export { UserController };
