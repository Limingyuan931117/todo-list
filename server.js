/* eslint-disable */
const express = require("express");
const app = express();
const uuid = require("uuid/v4");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/versions/all", (req, res) => {
  res.json([
    { title: "新OA上线公文版本", num: "1", id: uuid() },
    { title: "新OA上线会议版本", num: "1", id: uuid() },
    { title: "新OA上线督办版本", num: "1", id: uuid() }
  ]);
});

app.delete("/versions/delete/:id", (req, res) => {
  res.json(true);
});

app.post("/versions/add/version", (req, res) => {
  const item = req.body;
  res.json({ ...item, id: uuid() });
});

app.put("/versions/update/version", (req, res) => {
  res.json(true);
});

app.listen(5001, error => {
  if (error) {
    console.error("启动服务器失败", error);
  } else {
    console.log("启动服务器成功");
  }
});
