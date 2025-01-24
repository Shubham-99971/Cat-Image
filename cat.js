const URL = "https://api.thecatapi.com/v1/images/search";
const btn = document.querySelector("#btn");
const img=document.querySelector("#img");

const getfacts = async () => {
  let response = await fetch(URL); // JSON format
  let data = await response.json();
  img.src=data[0].url;
  img.style.display="block";
};
btn.addEventListener("click", getfacts);

// const getfacts=()=>{
//      let response=fetch(URL);
//      let data=response.json();
//      img.src=data[0].url;
//    img.style.display="block";
// }
// /*The issue in this code is that the fetch function 
// and the response.json() method are asynchronous,
// but you are treating them as if they are synchronous. 
// This means that the code is trying to access the data
// before the fetch and response.json() operations have completed. */

