import "./Header.css";

export default function Header() {
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="header">
      <h3>Panel de Control</h3>

      <div className="user-info">
        <span>{role}</span>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    </div>
  );
}