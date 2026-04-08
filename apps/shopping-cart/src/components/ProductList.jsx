import { useProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

function ProductList() {
  const { products, loading, error } = useProductContext();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}
      {products.map((product) => (
        <ProductCard key={product.id} productId={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
