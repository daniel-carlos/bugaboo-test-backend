import { prisma } from "../../app";

class UserController {
  deleteUser = async (id: string) => {
    const userDelete = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
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

  createUser = async (username: string) => {
    const userCreated = await prisma.user.create({
      data: {
        username,
      },
    });
    return userCreated;
  };
}

export { UserController };
