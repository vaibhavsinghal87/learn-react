import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

export function useProductContext() {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }

  return context;
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}
