const URL = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("#btn");
const img=document.querySelector("#img");

const getFacts = async () => {
  console.log("getting data .....");
  let response = await fetch(URL);
  console.log(response); // JSON format
  let data = await response.json();
  img.src=data[0].url;
  img.style.display="block";
};
btn.addEventListener("click", getFacts);