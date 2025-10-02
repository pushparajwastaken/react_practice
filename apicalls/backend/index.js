import express from "express";

const app = express();
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Laptop", price: 65000 },
    { id: 2, name: "Smartphone", price: 30000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 },
    { id: 5, name: "Monitor", price: 12000 },
  ];
  if (req.query.search) {
    const filteredproducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filteredproducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 5000);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
