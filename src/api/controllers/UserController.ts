import { prisma } from "../../app";

class UserController {
  getHighScores = async (limit: number) => {
    const usersFound = await prisma.user.findMany({
      orderBy: {
        score: "desc",
      },
      take: limit,
      where: {
        score: {
          gt: 0,
        },
      },
    });
    return usersFound;
  };

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

  findUsers = async (usernames: string[]) => {
    const usersFound = await prisma.user.findMany({
      where: {
        username: { in: usernames },
      },
    });
    return usersFound;
  };

  setScore = async (username: string, score: number) => {
    const user = await prisma.user.findFirst({
      where: { username },
    });

    const maxScore = Math.max(user?.score || 0, score);

    const transaction = await prisma.$transaction([
      prisma.user.update({
        where: { username },
        data: { score: maxScore },
      }),
    ]);

    return transaction[0];
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
