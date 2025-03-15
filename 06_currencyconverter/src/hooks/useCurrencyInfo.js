import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); //even if no value comes it will still not crash
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency])); //jo bhi currency ki valuue pass karunga wo bhi key ki value rahegi
    //we can use [] for taking access of some object other than using dot also
    console.log(data);
  }, [currency]);
  return data;
}
export default useCurrencyInfo;
