import { useMemo, useState } from "react";
import {type CollectionType,useCollection,} from "../context/CollectionContext";

const Collection = () => {
  const {
    owned,
    wishlist,
    selling,
    removeFromCollection,
    moveItem,
  } = useCollection();

  const [tab, setTab] = useState<CollectionType>("owned");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const data =
    tab === "owned"
      ? owned
      : tab === "wishlist"
      ? wishlist
      : selling;

  const items = useMemo(() => {
    let arr = [...data];

    arr = arr.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    if (sort === "low")
      arr.sort((a, b) => a.price - b.price);

    if (sort === "high")
      arr.sort((a, b) => b.price - a.price);

    return arr;
  }, [data, search, sort]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        My Collection
      </h1>

      <div className="flex gap-3 mb-5">
        {(["owned", "wishlist", "selling"] as CollectionType[]).map(
          (item) => (
            <button
              key={item}
              onClick={() => setTab(item)}
              className={`px-4 py-2 rounded ${
                tab === item
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
            >
              {item}
            </button>
          )
        )}
      </div>

      <div className="flex gap-3 mb-6">
        <input
          placeholder="Search..."
          className="border p-2 rounded flex-1"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="border rounded p-2"
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">Sort</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {items.length === 0 ? (
        <div className="text-center p-10 border rounded">
          No items found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-xl p-4"
            >
              <img
                src={item.image}
                className="h-48 w-full object-cover rounded"
              />

              <h2 className="font-bold mt-3">
                {item.title}
              </h2>

              <p>{item.category}</p>

              <p className="font-semibold">
                ₹{item.price}
              </p>

              <p>
                Date Added: {item.dateAdded}
              </p>

              <p>
                Estimated Value:
                ₹{item.estimatedValue}
              </p>

              <div className="flex gap-2 mt-4 flex-wrap">
                <button
                  onClick={() =>
                    removeFromCollection(
                      item.id,
                      tab
                    )
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>

                {tab !== "owned" && (
                  <button
                    onClick={() =>
                      moveItem(
                        item.id,
                        tab,
                        "owned"
                      )
                    }
                    className="bg-green-600 text-white px-3 py-1 rounded"
                  >
                    Move to Owned
                  </button>
                )}

                {tab !== "wishlist" && (
                  <button
                    onClick={() =>
                      moveItem(
                        item.id,
                        tab,
                        "wishlist"
                      )
                    }
                    className="bg-pink-600 text-white px-3 py-1 rounded"
                  >
                    Wishlist
                  </button>
                )}

                {tab !== "selling" && (
                  <button
                    onClick={() =>
                      moveItem(
                        item.id,
                        tab,
                        "selling"
                      )
                    }
                    className="bg-yellow-600 text-white px-3 py-1 rounded"
                  >
                    Selling
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Collection;