const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const { resolve } = require("path");
const koaStatic = require("koa-static");
import loadRouter from "./lib/loadRouter";
// import coonnectDB from "./lib/connectDb";
const app = new Koa();
const PORT = 3000;
app.use(koaStatic(resolve(__dirname, "../public")));
app.use(bodyparser());
// 配置数据库
// coonnectDB(app);
loadRouter(app);
app.listen(PORT, () => {
  console.log(`服务启动在${PORT}端口`);
});
