import express from "express";
import { PrismaClient } from "@prisma/client";
import loggerMiddleware from "./middlewares/logger.middleware";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(loggerMiddleware);

export { app, prisma };
