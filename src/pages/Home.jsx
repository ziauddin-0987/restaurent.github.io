import React, { useEffect } from "react";
import "./home.css";

function Home() {
  // var myFunc;
  const [apis, setApis] = React.useState([]);
  useEffect(() => {
    const myFunc = async () => {
      try {
        const get = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=`
        );
        const res = await get.json();
        console.log(res.meals);
        setApis(res.meals);
        // };
      } catch (error) {
        console.log(message.error);
      }
    };
    myFunc();
  }, []);
  return (
    <>
      <div className="AllItemsInBox">
        {apis.map((e) => {
          return (
            <div key={e.idMeal} className="apiImgfirstBoxes">
              {e.title}

              <img src={e.strMealThumb} alt="api img" className="apiImg" />

              <h4 className="apiText">{e.strMeal}</h4>
              {/* < >{e.strIngredient2}</h4> */}
              <h4 className="apiText">{e.strIngredient2}</h4>
              <h4 className="apiText">{e.strMeasure2}</h4>
              {/* <h4 className="apiText">{e.strArea}</h4> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
