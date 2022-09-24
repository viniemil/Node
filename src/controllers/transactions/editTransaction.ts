import { Request, Response } from "express";
import { usersApp } from "../../db/users";

export class EditTransactionController {
  editTransaction(request: Request, response: Response) {
    const { userId, id } = request.params;
    const { title, value, type } = request.body;

    const user = usersApp.find((user) => userId === user.id);

    const transactionFound = user?.transactions.find(
      (trans) => id === trans.id
    );

    transactionFound?.transactionUpdate(title, value, type);

    return response.json(transactionFound);
  }
}
