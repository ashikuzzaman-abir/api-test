import express from "express";
import { addProduct, getProducts, getAProduct, updateAProduct } from "./product.controller.js";

const router = express.Router();

router.post("/", addProduct);
router.get("/", getProducts);
router.get("/:id", getAProduct);
router.patch("/:id", updateAProduct);

export default router;
