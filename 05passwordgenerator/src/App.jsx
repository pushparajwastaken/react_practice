import { useState, useCallback } from "react";

import "./App.css";

function App() {
  //the usestate defines the default value of the state

  //collecting all the things we need as input
  //to track the length of the password
  const [length, setLength] = useState(8);
  //to check the inclusion of numbers in password
  const [numberallowed, setNumberallowed] = useState(false);
  //to check the inclusion of extra characters in the password
  const [extraallowed, setExtraallowed] = useState(false);
  //for input field of password also we have to keep it in a state
  const [password, setPassword] = useState("");

  //this function has to be called whenever a button is clicked or a checkbox is checked
  const passwordgenerator = useCallback(() => {
    //generating a password of the given length
    let pass = "";
    let str =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    if (numberallowed) str += "0123456789";
    if (extraallowed) str += "!@#$%^&*()[]{}+=-_|;:<>,.?~`";
    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      //we get a character from this Maath.floor which means we got not the actual element of the array but the index value of the array
      pass = str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, extraallowed, setPassword]); //whenever any of these would be changed the
  //setPassword is also passed because it is also a dependency and on it's basis a new password is generated

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600">
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
        </div>
      </div>
    </>
  );
}

export default App;
