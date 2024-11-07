import React from "react";
import { useSelector, useDispatch } from "react-redux";
import getSliceData from "../features/counterSlice";
// import store from "../app/store";
function About() {
  const datas = useSelector((state) => {
    console.log("state ...", state.app);
    return state.api;
  });

  return (
    <>
      <button
        onClick={() => {
          dispatch(getSliceData);
        }}
      >
        click
      </button>
      {datas.data.map((e) => {
        return <div key={e.idMeal}>{e.idMeal}</div>;
      })}
    </>
  );
}

export default About;
