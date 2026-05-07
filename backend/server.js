// backend/server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productoRoutes from "./routes/productoRoutes.js";
import morgan from "morgan";
import helmet from "helmet";
import authRoutes from "./routes/authRoutes.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

connectDB();

app.get("/", (req, res) => res.json({ success: true, message: "API Tienda Productos" }));

// --- RUTAS ORIGINALES (Funcionan perfecto en tu localhost) ---
app.use("/api/productos", productoRoutes);
app.use("/api/auth", authRoutes);

// --- RUTAS DE RESCATE (Para Vercel si recorta el "/api") ---
app.use("/productos", productoRoutes);
app.use("/auth", authRoutes);

// Middleware de manejo de errores (último)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Error interno del servidor", error: err.message });
});

app.get("/test-db", async (req, res) => {
  try {
    const users = await mongoose.connection.db.collection("users").find().toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Mantenemos el listen para tu entorno local
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
}

// EXPORTACIÓN OBLIGATORIA PARA VERCEL
export default app;