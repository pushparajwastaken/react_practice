import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";
function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        console.log(response.data);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request Cancelled", error.message);
          return;
        }
        setError(true);
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [search]);
  // if (error) {
  //   return <div>Gadbad hogayi Saab jiiiii</div>;
  // }

  // if (loading) {
  //   return <div>Main vi tere utte marda ni</div>;
  // }
  return (
    <div>
      <h1>Lavanya Nagle</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading && <h1>Jagga Jasoos on work</h1>}
      {error && <h1>Galti se mistake</h1>}
      <h2>{products.length}</h2>
      <h3></h3>
    </div>
  );
}

export default App;
