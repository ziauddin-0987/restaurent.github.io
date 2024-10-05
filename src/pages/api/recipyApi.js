// const recipyApi = async () => {
//   let api = await fetch("https://api.coinbase.com/v2/prices/ETH-USD/buy")
//     .then((res = await api.json()))
//     .then((data = await res));
//   console.log(data);

//   // return <div>recipyApi</div>;
// };
// recipyApi();
let ipi = "https://api.spoonacular.com/food/search";
let apis = async (ipi) => {
  const get = await fetch(ipi);
  const data = await get.json();
  console.log(data.id);
};
// console.log(apis);
apis();
