import { Request, Response, NextFunction } from "express";
import { usersApp } from "../db/users";

export class validateTransactionMiddlewares {
  validateTransction(request: Request, response: Response, next: NextFunction) {
    const { id } = request.params;

    if (!id) {
      return response.status(404);
    }

    const transactionsFound = usersApp.find((user) =>
      user.transactions.forEach((transactions) => transactions.id === id)
    );

    if (!transactionsFound) {
      return response.status(404).json({ message: "Transação não encontrada" });
    }
    return next();
  }
}
