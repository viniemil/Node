import { Express } from "express";
import { CreateNewuser } from "./controllers/create-new-user";
import { CreateNewtransactionController } from "./controllers/createrNewTransaction";
import { DeleteUserController } from "./controllers/deleteUser";
import { EditUserController } from "./controllers/editUser";
import { GetAllUsersController } from "./controllers/get-all-users";
import { GetUserController } from "./controllers/get-userById";

export default (app: Express) => {
  app.get("/user", new GetAllUsersController().getAll);
  app.post("/user", new CreateNewuser().createUser);
  app.get("/user/:id", new GetUserController().getUserById);
  app.put("/user/:id", new EditUserController().editUser);
  app.delete("/user/:id", new DeleteUserController().deleteUser);
  app.post(
    "/user/:userId/transactions:",
    new CreateNewtransactionController().createTransaction
  );
};
