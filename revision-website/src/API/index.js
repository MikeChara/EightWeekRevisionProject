import { sendData } from "./List";

async function fetchMemes() {
  let responseJSON = await fetch("https://api.imgflip.com/get_memes");
  let result = await responseJSON.json();
  sendData(result.data.memes);
}

export default fetchMemes;
