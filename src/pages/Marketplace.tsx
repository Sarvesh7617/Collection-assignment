import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { AlertCircle, LoaderCircle } from "lucide-react";

const Marketplace = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");
  const [condition, setCondition] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = [
    "All",
    ...new Set(products.map((item) => item.category)),
  ];

  const conditions = [
    "All",
    ...new Set(products.map((item) => item.condition)),
  ];

  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    data = data.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    // Category
    if (category !== "All")
      data = data.filter((item) => item.category === category);

    if (condition !== "All")
      data = data.filter(
        (item) => item.condition === condition
      );


    // Sort
    if (sortBy === "low") 
      data.sort((a, b) => a.price - b.price);


    if (sortBy === "high")
      data.sort((a, b) => b.price - a.price);
    

    return data;
  }, [search, category, sortBy,condition]);



  useEffect(() => {
    try {
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    } 
    catch {
      setError("Products not load");
      setLoading(false);
    }
  }, []);


  if (loading)
    return (
      <div className="flex justify-center items-center py-20">
        <LoaderCircle
          className="h-10 w-10 animate-spin text-blue-600"
        />
        <p>Product loading...</p>
      </div>
    );


  if (error)
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-red-300 bg-red-50 p-6 text-red-600">
        <AlertCircle size={40} />

        <h2 className="font-bold text-lg">
          Error
        </h2>

        <p>{error}</p>
      </div>
    );

  return (
    <>
      <h1 className="mb-6 text-3xl font-bold">Marketplace</h1>

      {/* Controls */}
      <div className="mb-6 flex flex-col gap-4 md:flex-row">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 rounded-lg border p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="rounded-lg border p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>


        <select
          className="rounded-lg border p-2"
          value={condition}
          onChange={(e) =>
            setCondition(e.target.value)
          }
        >
          {conditions.map((item) => (
            <option key={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          className="rounded-lg border p-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low">Price: Low → High</option>
          <option value="high">Price: High → Low</option>
        </select>
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="rounded-lg border p-10 text-center text-gray-500">
          No products found.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default Marketplace;