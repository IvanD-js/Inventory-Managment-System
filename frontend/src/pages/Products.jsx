import { useState } from "react";
import Layout from "../components/Layout";
import ProductTable from "../components/ProductTable";
import ProductForm from "../components/ProductForm";

export default function Products() {
  const [refreshKey, setRefreshKey] = useState(0);

  const recargar = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <Layout>
      <h1>Productos</h1>

      <ProductForm onProductAdded={recargar} />
      <ProductTable refreshKey={refreshKey} />
    </Layout>
  );
}