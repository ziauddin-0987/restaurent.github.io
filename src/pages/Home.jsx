import React, { useEffect } from "react";
import { GrAdd } from "react-icons/gr";
import "./home.css";

function Home() {
  const [count ,setCount ] = usestate('')

function addValues(){
console.log(  setCount(++1))
}
  // var myFunc;
  const [apis, setApis] = React.useState([]);
  useEffect(() => {
    const myFunc = async () => {
      try {
        const get = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=cake`
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
            <div key={e.idMeal} className="AllItemsInBoxA">
              {/* {e.title} */}
              <div className="allProduceLineByLine">
                <div className="apiImgfirstBoxes">
                  <button className="sideBarButton"className="adds"
                  onClick={addValues} >
                    <GrAdd
                      className="adds "
                  
                    >
                      {count}</GrAdd>.
                  </button>
                  <img src={e.strMealThumb} alt="api img" className="apiImg" />
                  <h4 className="apiText">{e.strMeal}</h4>
                  {/* < >{e.strIngredient2}</h4> */}
                  <h4 className="apiText">{e.strIngredient2}</h4>
                  <h4 className="apiText">{e.strMeasure2}</h4>
                  {/* <h4 className="apiText">{e.strArea}</h4> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
