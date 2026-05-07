// // frontend/src/services/api.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api/productos",
//   timeout: 5000
// });

// export default api;

// frontend/src/services/api.js
import axios from "axios";

const api = axios.create({
  // Si existe la variable de entorno la usa, si no, usa el servidor local
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
  timeout: 10000 // Aumentamos un poco el tiempo por si el backend tarda en despertar
});

export default api;