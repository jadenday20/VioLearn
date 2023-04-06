import { getParam } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";
import songDetails from "./songsClass.mjs";
const baseURL = "/json/sheet_music.json";

const songId = getParam("song");

const dataSource = new ExternalServices(baseURL);

const song = new songDetails(songId, dataSource);

song.init();