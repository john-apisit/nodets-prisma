import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT ?? 3000;
const prisma = new PrismaClient();

// Middleware
app.use(express.json());

// Routes
app.post(
  "/v1/products",
  async (
    req: Request<any, any, { name: string; price: number }>,
    res: Response
  ) => {
    const { name, price } = req.body;
    const product = await prisma.product.create({
      data: {
        name,
        price,
      },
    });
    res.json(product);
  }
);

app.get("/v1/products", async (req: Request, res: Response) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
