import { useState } from "react";
//import axios from "axios";
import "./Register.css";
import api from "../services/api";

export default function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    role: "user"
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async () => {
    if (!form.username || !form.password) {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      await api.post("/auth/register", form);

      setSuccess("Usuario registrado correctamente");
      setError("");

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);

    } catch (err) {
      setError("Error al registrar (usuario puede existir)");
      setSuccess("");
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h1>Crear Usuario</h1>
        <p>Regístrate para acceder al sistema</p>

        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}

        <input
          type="text"
          placeholder="Usuario"
          onChange={(e) =>
            setForm({ ...form, username: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Contraseña"
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <select
          onChange={(e) =>
            setForm({ ...form, role: e.target.value })
          }
        >
          <option value="user">Usuario</option>
          <option value="admin">Administrador</option>
        </select>

        <button onClick={handleRegister}>
          Registrarse
        </button>

        <span
          className="link"
          onClick={() => window.location.href = "/"}
        >
          ¿Ya tienes cuenta? Inicia sesión
        </span>

      </div>
    </div>
  );
}