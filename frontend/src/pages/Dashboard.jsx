import Layout from "../components/Layout";

export default function Dashboard() {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  if (!token) {
    return <h2>No autorizado</h2>; // evita romper render
  }

  return (
    <Layout>
      <h1>Bienvenido</h1>

      {role === "admin" ? (
        <div>
          <h2>Panel de Administrador</h2>
          <p>Tienes acceso completo al sistema.</p>
        </div>
      ) : (
        <div>
          <h2>Panel de Usuario</h2>
          <p>Acceso limitado.</p>
        </div>
      )}
    </Layout>
  );
}