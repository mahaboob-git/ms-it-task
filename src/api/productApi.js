export const fetchProducts = async () => {
  const API_BASE_URL = "https://jsonplaceholder.typicode.com";
  const response = await fetch(`${API_BASE_URL}/photos?_limit=10`);
  const data = await response.json();
  return data.map((item) => ({
    id: item.id,
    name: item.title,
    image: item.url,
    rating: Math.floor(Math.random() * 5) + 1,
    price: Math.floor(Math.random() * 200) + 50,
    oldPrice: Math.floor(Math.random() * 300) + 150,
  }));
};
