import { Request, Response, NextFunction } from "express";
import { usersApp } from "../db/users";
import { User } from "../models/user";

export class ValidateUserMiddleware {
  validateUser(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.params;

    const user = usersApp.find((user: User) => userId === user.id);

    if (!user) {
      return response.status(404).json({ message: "Usuário não encontrado." });
    }
    return next();
  }
}
