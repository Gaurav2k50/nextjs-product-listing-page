import axios from "axios";

export const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Mock data for our custom categories
const categoryMappings = {
  bags: "bags",
  travel: "travel",
  accessories: ["accessories", "accessories"],
  gifting: ["gifting", "gifting"],
  jewelery: "jewelery",
};

export const getProductsByCategory = async (category: string) => {
  try {
    if (category === "all") {
      const response = await api.get("/products");
      return response.data;
    }

    // Map our custom categories to FakeStore API categories
    const apiCategory =
      categoryMappings[category as keyof typeof categoryMappings];

    if (Array.isArray(apiCategory)) {
      // If category maps to multiple API categories, fetch and combine them
      const promises = apiCategory.map((cat) =>
        api.get(`/products/category/${cat}`)
      );
      const responses = await Promise.all(promises);
      const products = responses.flatMap((response) => response.data);
      return products;
    } else if (apiCategory) {
      const response = await api.get(`/products/category/${apiCategory}`);
      return response.data;
    }

    // Fallback to all products if category is not found
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getCategories = async () => {
  return ["all", "bags", "travel", "accessories", "gifting", "jewelery"];
};
