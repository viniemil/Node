import { Request, Response } from "express";
import { usersApp } from "../../db/users";
import { Transaction } from "../../models/transaction";

export class CreateNewtransactionController {
  createTransaction(request: Request, response: Response) {
    const { title, value, type } = request.body;
    const { id } = request.params;
    const user = usersApp.find((user) => id === user.id);

    const transaction = new Transaction(title, value, type);

    user?.transactions.push(transaction);

    return response.json(user);
  }
}
