import express from "express";
import path from "path";
import nunjucks from "nunjucks";

const __dirname = path.resolve();

const app = express();

// view engine set
app.set("view engine", "html"); // main.html -> main

// nunjucks
nunjucks.configure("views", {
  watch: true, // html 파일이 수정될 경우, 다시 반영 후 렌더링
  express: app,
});

// middleware
app.get("/", (req, res) => {
  // res.send("Main page GET request");
  res.sendFile(__dirname + "/public/main.html");
});

app.get("/write", (req, res) => {
  res.render("write.html");
});

app.listen(3000, () => {
  console.log("Server is running");
});
