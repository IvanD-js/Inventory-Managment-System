// backend/routes/productoRoutes.js
import express from "express";
import {
  obtenerProductos,
  agregarProducto,
  editarProducto,
  eliminarProducto,
  obtenerProducto,
  obtenerPorCodigo
} from "../controllers/productoController.js";
import { proteger, esAdmin } from "../middleware/auth.js";

const router = express.Router();

router.get("/", obtenerProductos);

// nueva ruta: buscar por codigo (colócala antes de /:id)
router.get("/codigo/:codigo", obtenerPorCodigo);

// obtener por id normal
router.get("/:id", obtenerProducto);

router.post("/", agregarProducto);
router.put("/:id", editarProducto);
router.delete("/:id", proteger, esAdmin, eliminarProducto);

export default router;
