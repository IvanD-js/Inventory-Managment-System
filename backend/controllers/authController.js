import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generarToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET || "secreto123",
    { expiresIn: "1h" }
  );
};

// REGISTRO
export const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const existe = await User.findOne({ username });
    if (existe) {
      return res.status(400).json({ message: "El usuario ya existe" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = new User({
      username,
      password: hashed,
      role
    });

    await user.save();

    res.json({ message: "Usuario registrado correctamente" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: "USUARIO INCORRECTO" });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return res.status(400).json({ message: "USUARIO INCORRECTO" });
    }

    const token = generarToken(user);

    res.json({
      token,
      role: user.role
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};