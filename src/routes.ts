import { Express } from "express";
import { CreateNewtransactionController } from "./controllers/transactions/createTransaction";
import { GetUserController } from "./controllers/users/getUserById";
import { GetTransactionController } from "./controllers/transactions/getTransactionById";
import { EditTransactionController } from "./controllers/transactions/editTransaction";
import { DeleteTransactionController } from "./controllers/transactions/deleteTransaction";
import { CreateNewuser } from "./controllers/users/createUser";
import { GetAllUsersController } from "./controllers/users/getAllUsers";
import { EditUserController } from "./controllers/users/editUser";
import { DeleteUserController } from "./controllers/users/deleteUser";

export default (app: Express) => {
  app.post("/user", new CreateNewuser().createUser);
  app.get("/user", new GetAllUsersController().getAll);
  app.get("/user/:id", new GetUserController().getUserById);
  app.put("/user/:id", new EditUserController().editUser);
  app.delete("/user/:id", new DeleteUserController().deleteUser);

  app.post(
    "/user/:id/transactions",
    new CreateNewtransactionController().createTransaction
  );
  app.get(
    "/user/:userId/transactions/:id",
    new GetTransactionController().getTransaction
  );
  app.put(
    "/user/:userId/transactions/:id",
    new EditTransactionController().editTransaction
  );
  app.delete(
    "/user/:userId/transactions/:id",
    new DeleteTransactionController().deleteTransaction
  );
};
