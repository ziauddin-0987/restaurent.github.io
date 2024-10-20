import React, { useEffect } from "react";

function Home() {
  const [apis, setApis] = React.useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=cake")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setApis(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // console.log(res);

  return (
    <>
      <h1> hallo home</h1>
      {apis.map((e) => {
        return <div key={e.idMeal}>{e.title}</div>;
      })}
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
