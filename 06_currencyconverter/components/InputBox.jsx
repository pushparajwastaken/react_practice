import { React, useId } from "react";
//useId is a React Hook for generating unique IDs that can be passed to accessibility attributes.
//Accessibility attributes in HTML help improve web accessibility by making websites more usable for people with disabilities, especially those using screen readers or assistive technologies.
function InputBox({
  label,
  amount,
  onAmountChange, //if the amount is changed then  the state should also be changed
  onCurrencyChange, //similarly when the currency is changed then the state will also be changed
  currencyOption = [], //jo bhi currency optinos hai wo array main  hi honge even though api response json main dega but app ko crash hone se bachane ke liye hum ek empty array hi lenge
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

  className = "",
}) {
  const amountInputId = useId(); //this will give us a unique value of random string
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-black/40mb-2 inline-block"
        ></label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //amount change hote hi state bhi change ho jayega
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(Number(e.target.value))
          }
          disabled={currencyDisable}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
