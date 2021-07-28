const express = require("express");
const cors = require("cors");
const usersRoutes = require("../routes/user.routes");
class Server {
  app = express();
  //pre-routes
  defaultApiPath = "/api";
  usersPath = this.defaultApiPath + "/users";
  productsPath = this.defaultApiPath + "/products";
  constructor() {
    this.middlewares();
    this.settings();
    this.routes();
  }
  settings() {
    this.app.set("port", process.env.PORT || 3000);
  }
  middlewares() {
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.usersPath, usersRoutes);
    this.app.get("/",(req,res)=>{
      res.send("hello")
    })
    //redirect to 404 page
    this.app.all("*",(req,res)=>{
      res.status(404).json({msg:"404 page not found"})
    })
  }

  listen() {
    this.app.listen(this.app.get("port"), (err) => {
      err
        ? console.error("err")
        : console.log(`Server on port ${this.app.get("port")}`);
    });
  }
}
module.exports = Server;
