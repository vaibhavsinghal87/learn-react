import { useProductContext } from "../context/ProductContext";

function ProductCard({ productId }) {
  const { products } = useProductContext();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-40 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-500 text-sm mb-2">{product.description}</p>
      <p className="font-bold text-">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;
