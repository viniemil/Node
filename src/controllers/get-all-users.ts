import { Request, Response } from "express";
import { usersApp } from "../db/users";

export class GetAllUsersController {
  getAll(request: Request, response: Response) {
    const data = usersApp.map((user) => {
      return {
        id: user.id,
        name: user.name,
        cpf: user.cpf,
        email: user.email,
        age: user.age,
      };
    });

    return response.json(data);
  }
}
