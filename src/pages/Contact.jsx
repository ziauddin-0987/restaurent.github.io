import { useState } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { increment, decrement } from "../features/counterSlice";
import viteLogo from "/vite.svg";
// import "./App.css";
import React from "react";

function Contact() {
  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();
  // const [count, setCount] = useState(0)

  return (
    <>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>

      <div>
        {/* <h1>{count}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      </div>

      {/* export default Counter; */}
    </>
  );
}
export default Contact;
