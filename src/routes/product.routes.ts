import express from "express";
import { ProductController } from "../controllers/product.controller";

const router = express.Router();

router.post("/", ProductController.create);
router.get("/", ProductController.getAll);

export default router;