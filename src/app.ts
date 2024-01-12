import express,{Response, Request} from "express";
import { connectDB } from "./database";
import userRouter from "./modules/user/user.route";

require("dotenv").config();

const app = express();

app.use(express.json());  
app.use(express.urlencoded({ extended: true }));

connectDB();

// init the routes
app.use("/users", userRouter);

// app.use("/users", userRouter);
// app.use("/invoices", invoiceRouter);

app.listen(process.env.PORT, () => {
  console.log("App listening to port ", process.env.PORT);
});
