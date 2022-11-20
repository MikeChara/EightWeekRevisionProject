import { sendData } from "./List";

async function fetchMemes() {
  let responseJSON = await fetch("https://api.imgflip.com/get_memes");
  let result = await responseJSON.json();
  // console.log("dave ", result);
  // console.log(result.data);
  // console.log(result.data.memes);
  // console.log(result.data.memes[0]);
  sendData(result.data.memes);
}

export default fetchMemes;
