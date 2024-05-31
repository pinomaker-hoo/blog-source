// ** src/app.ts

import "reflect-metadata";

// ** Module Imports
import express, { Handler } from "express";
import { controllers } from "./decorator/controller";
import { MetadataKeys } from "./decorator/metadata.keys";
import { IRouter } from "./decorator/handlers.decorator";

export class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.registerRouters();
  }

  /**
   * 미들웨어를 세팅한다.
   */
  private setMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  /**
   * Router를 등록한다.
   */
  private registerRouters() {
    const info: Array<{ api: string; handler: string }> = [];

    controllers.forEach((controllerClass) => {
      const controllerInstance: { [handleName: string]: Handler } =
        new controllerClass() as any;

      const basePath: string = Reflect.getMetadata(
        MetadataKeys.BASE_PATH,
        controllerClass
      );
      const routers: IRouter[] = Reflect.getMetadata(
        MetadataKeys.ROUTERS,
        controllerClass
      );

      const exRouter = express.Router();

      routers.forEach(({ method, path, handlerName }) => {
        exRouter[method](
          path,
          controllerInstance[String(handlerName)].bind(controllerInstance)
        );

        info.push({
          api: `${method.toLocaleUpperCase()} ${basePath + path}`,
          handler: `${controllerClass.name}.${String(handlerName)}`,
        });
      });

      this.app.use("/api" + basePath, exRouter);
    });
  }

  /**
   * Express를 시작한다.
   * @param port 포트
   */
  public async createExpressServer(port: number): Promise<void> {
    try {
      this.app.listen(port, "0.0.0.0", () => {
        console.log(`Server is running on PORT : ${port} on ENV`);
      });
    } catch (error) {
      console.error("Server start failed");
      console.error(error);
    }
  }
}
