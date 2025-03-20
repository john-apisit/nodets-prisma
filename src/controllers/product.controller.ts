import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export const ProductController = {
  async create(req: Request<any, any, CreateProductPayload>, res: Response) {
    const { name, price } = req.body;
    const product = await ProductService.createProduct(name, price);
    res.json(product);
  },

  async getAll(req: Request, res: Response) {
    const products = await ProductService.getAllProducts();
    res.json(products);
  },
};

type CreateProductPayload = {
  name: string;
  price: number;
};
