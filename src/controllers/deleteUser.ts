import { Request, Response } from "express";
import { usersApp } from "../db/users";

export class DeleteUserController {
  deleteUser(request: Request, response: Response) {
    const userId = request.params.id;

    const indexUser = usersApp.findIndex((user) => user.id === userId);

    usersApp.splice(indexUser, 1);

    return response.json(usersApp);
  }
}
