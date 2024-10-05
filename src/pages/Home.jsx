import React, { useEffect } from "react";

function Home() {
  const [apis, setApis] = React.useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setApis(data);
      });
  }, []);

  // console.log(res);

  return (
    <>
      <h1> hallo home</h1>
      {apis.map((e) => {
        return (
          <>
            <h1>Home :{e.idMeal}</h1>
            {/* <h1> title :{e.title}</h1> */}
          </>
        );
      })}
      {/* <h1>Home{apis.id}</h1>
      <h1> title{apis.title}</h1>
      <h2> Link access this line {data.tital}</h2> */}
    </>
  );
}

export default Home;
