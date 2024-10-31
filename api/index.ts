import express, { Request, Response } from "express";
import { connectDb } from "./database";
import { UserRouter } from "./router/userRouter";

const app = express();

app.use(express.json());

const port = 8001;

app.use("/", UserRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, TypeScript Express!");
});

connectDb();
const server = async () => {
  app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
  });
};

server();
