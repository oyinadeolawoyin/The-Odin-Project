import { createContext, useContext, useState, useEffect } from "react";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        let fetchedProduct = await fetch(
          "https://api.escuelajs.co/api/v1/products?limit=20",
        );

        if (!fetchedProduct.ok) {
          console.log(`Response status: ${fetchData.status}`);
          throw new Error("Failed to fetch");
        }

        let response = await fetchedProduct.json();

        console.log("clo:", response);

        setProduct(
          response.filter(
            (data) =>
              Array.isArray(data.images) &&
              data.images.some((img) => /\.(jpe?g)$/i.test(img)) &&
              !data.images.includes("https://placehold.co/600x400") &&
              data.description &&
              data.description.length > 50,
          ),
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <ProductContext.Provider value={{ product, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
