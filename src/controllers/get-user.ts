import { usersApp } from "../db/users";
import { Request, Response } from "express";

export class GetUserController {
  getUser(request: Request, response: Response) {
    const data = usersApp.find(({ name }) => name == request.params.id);

    return response.json(data);
  }
}
