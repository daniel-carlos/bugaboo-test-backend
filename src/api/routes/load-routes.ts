import { Router, Express } from "express";
import * as path from "path";
import * as fs from "fs";

export function loadRoutes(app: Express) {
  const router = Router();
  const normalizedPath = path.join(__dirname);
  console.log("\nRouters:");

  fs.readdirSync(normalizedPath)
    .filter((file) => file !== "index.ts" && file.endsWith(".route.ts"))
    .forEach((file) => {
      console.log("\t-" + file);
      const route = require(path.join(normalizedPath, file)).default;
      router.use(route.path, route.router);
    });

  app.use("/api", router);
}
