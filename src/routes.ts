import { Express } from "express";
import { CreateNewuser } from "./controllers/create-new-user";
import { GetAllUsersController } from "./controllers/get-all-users";
import { GetUserController } from "./controllers/get-user";

export default (app: Express) => {
  app.get("/user", new GetAllUsersController().getAll);
  app.post("/user", new CreateNewuser().create);

  app.get("/user/:id", new GetUserController().getUser);
};
