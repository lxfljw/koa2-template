import { Controller, GET } from "../lib/decoratorRouter";
@Controller("/example")
export default class UserController {
  /**
   * 验证方法 localhost:3000/api/example/list
   * @param ctx
   * @param next
   */
  @GET("/hello")
  async articleList(ctx, next) {
    ctx.body = { data: "hello" };
    next();
  }
}
