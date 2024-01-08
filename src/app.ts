import express from "express";
import { connectDB } from "./database";

require("dotenv").config();

const app = express();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

connectDB();

// app.get("/", (_req: Request, res: Response) => {
//   return res.send("Hello world");
// });
// app.use("/users", userRouter);
// app.use("/invoices", invoiceRouter);

app.listen(process.env.PORT, () => {
  console.log("App listening to port ", process.env.PORT);
});
