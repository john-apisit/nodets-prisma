import prisma from "../config/prisma";

export const ProductService = {
  async createProduct(name: string, price: number) {
    return prisma.product.create({ data: { name, price } });
  },

  async getAllProducts() {
    return prisma.product.findMany();
  },
};
