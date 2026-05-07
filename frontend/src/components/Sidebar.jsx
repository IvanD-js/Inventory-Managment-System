import "./Sidebar.css";

export default function Sidebar() {
  const role = localStorage.getItem("role");

  return (
    <div className="sidebar">
      <h2>Inventario</h2>

      <ul>
        <li onClick={() => window.location.href="/dashboard"}>
          Dashboard
        </li>

        <li onClick={() => window.location.href="/products"}>
          Productos
        </li>

        {role === "admin" && (
          <li>Administración</li>
        )}
      </ul>

     
       <footer>@Ivandev25 🧑‍💻❤️</footer>
     
    </div>
    
  );
}