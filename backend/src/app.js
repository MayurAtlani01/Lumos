import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Lumos is Running",
  });
});

export default app;