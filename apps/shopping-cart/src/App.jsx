import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const url = "/api/products";
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch products data");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        // set error state
        setError(
          error instanceof Error
            ? error.message
            : "Failed to fetch products data",
        );
      } finally {
        // set loading to false
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6">Product Catalog</h1>
        {loading && <p>Loading...</p>}
        {error && <div className="error">{error}</div>}
        <ProductList products={products} />
      </div>
    </>
  );
}

export default App;
