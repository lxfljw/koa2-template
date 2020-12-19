const fs = require("fs");
const { resolve } = require("path");
const rootPath = process.env.NODE_ENV === "development" ? "src" : "dist";
// const rootPath = 'src'
const controllerPath = resolve(rootPath, "controllers");
export const controllerList = [];
// console.log(process.env.NODE_ENV+"环境:执行目录"+controllerPath, '--end')//这是controller
import router from "../decoratorRouter";
export default function loadRouter(app) {
  const loadController = (path) => {
    const files = fs.readdirSync(path);
    files.forEach((file) => {
      const filePath = resolve(path, file);
      // @ts-ignore
      const target = require(filePath);
      // console.log(target.router);
      controllerList.push(target);
      if (fs.lstatSync(filePath).isDirectory()) {
        loadController(filePath);
      } else {
        console.log("控制器路径", filePath);
      }
    });
  };
  loadController(controllerPath);
  app.use(router.routes());
}
