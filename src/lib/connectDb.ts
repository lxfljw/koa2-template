const mysql = require("mysql");
import dbConfig from "../config/db";
const { promisify } = require("util");
const connection = mysql.createConnection(dbConfig);
connection.connect();
export default (app) => {
  app.context.db = connection;
  app.context.db.query = promisify(connection.query);
};
