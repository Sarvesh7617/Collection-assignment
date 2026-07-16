import { useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCollection } from "../context/CollectionContext";

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const { addToCollection } = useCollection();

  if (!product)
    return <h1>Product Not Found</h1>;

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <img
        src={product.image}
        className="rounded-xl"
      />

      <div>
        <h1 className="text-4xl font-bold">
          {product.title}
        </h1>

        <p>{product.category}</p>

        <p>{product.condition}</p>

        <p className="text-2xl font-bold my-4">
          ₹{product.price}
        </p>

        <div className="flex gap-4">
          <button
            className="rounded bg-blue-600 px-5 py-3 text-white"
            onClick={() => {
              const added = addToCollection(
                product,
                "owned"
              );

              alert(
                added
                  ? "Added to Collection"
                  : "Already Exists"
              );
            }}
          >
            Add to Collection
          </button>

          <button
            className="rounded bg-pink-600 px-5 py-3 text-white"
            onClick={() => {
              const added = addToCollection(
                product,
                "wishlist"
              );

              alert(
                added
                  ? "Added to Wishlist"
                  : "Already Exists"
              );
            }}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;