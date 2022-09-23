import { Request, Response } from "express";
import { Transaction } from "../models/transaction";

export class CreateNewtransactionController {
  createTransaction(request: Request, response: Response) {
    const { id, value, type } = request.body;

    const transaction = new Transaction(value, type);
  }
}
