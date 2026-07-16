import { createContext, useContext, useState, type ReactNode } from "react";

export type CollectionType = "owned" | "wishlist" | "selling";

export interface Product 
{
  id: number;
  title: string;
  category: string;
  condition: string;
  price: number;
  seller: string;
  location: string;
  image: string;
  dateAdded?: string;
  estimatedValue?: number;

}

interface CollectionContextType 
{
  owned: Product[];
  wishlist: Product[];
  selling: Product[];

  addToCollection: (item: Product, type: CollectionType) => boolean;

  removeFromCollection: (id: number,type: CollectionType) => void;

  moveItem: (id: number,from: CollectionType,to: CollectionType) => boolean;
}

const CollectionContext = createContext<CollectionContextType | null>(null);

export const CollectionProvider = ({children}:{children:ReactNode}) => {
  const [owned, setOwned] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [selling, setSelling] = useState<Product[]>([]);

  const addToCollection = (
    item: Product,
    type: CollectionType
  ) => {
    const map = {
      owned: [owned, setOwned],
      wishlist: [wishlist, setWishlist],
      selling: [selling, setSelling],
    } as const;

    const [list, setList] = map[type];

    if (list.some((i) => i.id === item.id)) 
      return false;

    const newItem = {
      ...item,
      dateAdded: new Date().toLocaleDateString(),
      estimatedValue: item.price + 500,
    };

    setList([...list, newItem]);

    return true;
  };


  const removeFromCollection = (id: number,type: CollectionType) => {
  const map = {
    owned: [owned, setOwned],
    wishlist: [wishlist, setWishlist],
    selling: [selling, setSelling],
  } as const;

  const [list, setList] = map[type];

  setList(list.filter((item) => item.id !== id));
};

const moveItem = (id: number,from: CollectionType,to: CollectionType) => {
  if (from === to) 
    return false;

  const map = {
    owned: [owned, setOwned],
    wishlist: [wishlist, setWishlist],
    selling: [selling, setSelling],
  } as const;

  const [fromList, setFrom] = map[from];
  const [toList, setTo] = map[to];

  const item = fromList.find((i) => i.id === id);

  if (!item) 
    return false;

  if (toList.some((i) => i.id === id)) 
    return false;

  setFrom(fromList.filter((i) => i.id !== id));
  setTo([...toList, item]);

  return true;
};

  return (
    <CollectionContext.Provider
      value={{
        owned,
        wishlist,
        selling,
        addToCollection,
        removeFromCollection,
        moveItem
      }}
    >
      {children}
    </CollectionContext.Provider>
  );
};

export const useCollection = () => {
  const context = useContext(CollectionContext);

  if (!context)
    throw new Error(
      "useCollection must be used inside CollectionProvider"
    );

  return context;
};