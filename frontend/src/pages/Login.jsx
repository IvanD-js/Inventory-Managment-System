import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {

  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      window.location.href = "/dashboard";

    } catch {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (

    
    <div className="login-container">
      <div className="login-card">

        <h1>Login</h1>
        <p>Inicia sesión para continuar</p>

        {error && <span className="error">{error}</span>}

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

        <button onClick={handleLogin}>
          Ingresar
        </button>

        <span className="link"
          onClick={() => window.location.href = "/register"}>
          ¿No tienes cuenta? Regístrate
        </span>

      </div>
    </div>
  );
}