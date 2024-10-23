import React, { useEffect } from "react";
import "./home.css";

function Home() {
  const [apis, setApis] = React.useState([]);
  // useEffect(async () => {
  const myFunc = async () => {
    const get = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=cake`
    );
    const res = await get.json();
    console.log(res.meals);
    setApis(res.meals);
  };
  // myFunc();
  // }, []);

  // console.log(res);

  return (
    <>
      <h1> hallo home</h1>
      {apis.map((e) => {
        return (
          <div key={e.idMeal}>
            {e.title}
            <img src={e.strMealThumb} alt="api img" className="apiImg" />
            <h4>{e.strIngredient7}</h4>
          </div>
        );
      })}
      <button onClick="myFunc">click</button>
    </>
  );
}

export default Home;
// {apis.map((e) => {
//   return (
//     <>
//       <h1>Home :{e.title}</h1>
//       {/* <h1> title :{e.title}</h1> */}
//     </>
//   );
// })}
