const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = "/calculator";

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get("{baseUrl}/greeting", (req, res) => {
  return res.status(200).send("Hello world!");
});

baseRouter.post("{baseUrl}/add", (req, res) => {
  const { first, second } = req.body;
  if (typeof first !== "number" || typeof second !== "number") {
    res.status(400).send("Invalid Input");
  } else {
    const result = first + second;
    res.status(200).json({ result: result });
  }
});

baseRouter.post("{baseUrl}/subtract", (req, res) => {
  const { first, second } = req.body;
  if (typeof first !== "number" || typeof second !== "number") {
    res.status(400).send("Invalid Input");
  } else {
    const result = first - second;
    res.status(200).json({ result: result });
  }
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
