import ExternalServices from "./ExternalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

const sheet_music = document.getElementById("sheet_music");
const baseURL = "/json/sheet_music.json";

function displayMusic(song){

}

const services = new ExternalServices(baseURL);

const music = services.getData("sheet_music");
const getMusic = async () => {
    const a = await music;
    a.forEach(displaySongs);
  };

getMusic()

function displaySongs(song){
    const sheet_musicHTML = document.getElementById("sheet_music");
    const newSheetMusic = document.createElement("li");
    const link = document.createElement("a");
    link.href = "/sheet_music/";
    newSheetMusic.classList.add("song");
    link.textContent = song.name;
    newSheetMusic.appendChild(link)
    sheet_musicHTML.appendChild(newSheetMusic);
} ;