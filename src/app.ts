import express from "express";
import productRoutes from "./routes/product.routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use("/v1/products", productRoutes);

app.use(errorHandler); // Global error handler

export default app;
