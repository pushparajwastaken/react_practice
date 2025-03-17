import { useState } from "react";
import { InputBox } from "../components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo();
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[from] || !currencyInfo[to]) return;
    setConvertedAmount(amount * (currencyInfo[to] / currencyInfo[from]));
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-white">
      <div className="w-full max-w-md border border-gray-300 rounded-lg p-5 shadow-lg bg-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={setFrom}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount}
            />
          </div>
          <div className="text-center my-2">
            <button
              type="button"
              className="bg-blue-600 text-white px-4 py-1 rounded-lg"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          <div className="w-full mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={setTo}
              selectCurrency={to}
              amountDisable
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
