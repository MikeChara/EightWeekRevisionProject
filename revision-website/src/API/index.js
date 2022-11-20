// import { sendData } from "./List";

export let data = [];

async function fetchMemes() {
  let responseJSON = await fetch("https://api.imgflip.com/get_memes");
  let result = await responseJSON.json();
  return result.data.memes;
}

export default fetchMemes;
