import ExternalServices from "./ExternalServices.mjs";
const baseURL = "/json/sheet_music.json";

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
    link.href = `/songs/index.html?song=${song.ID}`;
    newSheetMusic.classList.add("song");
    link.textContent = song.name;
    newSheetMusic.appendChild(link)
    sheet_musicHTML.appendChild(newSheetMusic);
} ;