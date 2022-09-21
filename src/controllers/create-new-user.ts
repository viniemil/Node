import { Request, Response } from "express";
import { usersApp } from "../db/users";
import { User } from "../user";

export class CreateNewuser {
  create(request: Request, response: Response) {
    const { name, cpf, email, age } = request.body;

    const user = new User(name, cpf, email, age);

    usersApp.push(user);

    return response.json({
      id: user.id,
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      age: user.age,
    });
  }
}
