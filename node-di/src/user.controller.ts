import { Request, Response } from "express";
import Controller from "./decorator/controller.decorator";
import { Get } from "./decorator/handlers.decorator";

@Controller("/user")
export default class UserController {
  @Get("/")
  public getUser(req: Request, res: Response) {
    res.status(200).json({ message: "GET /user" });
  }
}
