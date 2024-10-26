import { config } from "dotenv";
import express from "express";
config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Route is working" });
});

app.listen(PORT, () => {
  console.log(`Backend up and running on Port:${PORT}`);
});
