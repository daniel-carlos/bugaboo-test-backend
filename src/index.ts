import { loadRoutes } from "./api/routes/load-routes";
import { app } from "./app";
const port = process.env.PORT;

loadRoutes(app);

app.get("/", (req, res) => {
  res.send({
    message: "Tudo OK",
    ok: true,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
