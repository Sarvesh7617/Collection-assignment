import { Link } from "react-router-dom";

interface productProps {
  id: number;
  title: string;
  category: string;
  condition: string;
  price: number;
  seller: string;
  location: string;
  image: string;
}


const ProductCard = ({product} :{product: productProps}) => {
  return (
    <div className="rounded-xl border bg-white shadow-sm overflow-hidden">
      <img
        src={product.image}
        alt={product.title}
        className="h-52 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-semibold">{product.title}</h2>

        <p className="text-sm text-gray-500">
          {product.category} • {product.condition}
        </p>

        <p className="mt-2 text-xl font-bold text-blue-600">
          ₹{product.price}
        </p>

        <p className="text-sm">{product.seller}</p>
        <p className="text-sm text-gray-500">{product.location}</p>

        <Link
          to={`/marketplace/${product.id}`}
          className="mt-4 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;