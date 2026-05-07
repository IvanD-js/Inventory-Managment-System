import Sidebar from "./Sidebar";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <>
      <Sidebar />
      <Header />

      <div className="main-content">
        {children}
      </div>
    </>
  );
}