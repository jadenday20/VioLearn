function songDetailsTemplate(song) {
    document.title = song.name + " | VioLearn";
    let html = `<h1>${song.name}</h1><section class="song-detail">`
    for (let i = 0; i < song.files.length; i++) {
        html += `<div class="songDetails"><h2>${song.files[i]}</h2><ul class="audioList">`
        for (let x = 0; x < song.audioFiles[i].length; x++){
            html += `<li class="audio_li"><label>${song.audioFiles[i][x]}</label><audio controls><source src="/sheet_music/audio_files/${song.audioFiles[i][x]}.m4a" type="audio/mpeg"></source></audio></li>`;
        }
        html += `</ul></div><iframe frameborder="0" src='/sheet_music/files/${song.files[i]}.pdf'></iframe>`
      }
    html += `</section>`;
    return html;
}

export default class songDetails {
    constructor(songId, dataSource){
        this.songId = songId;
        this.song = {};
        this.dataSource = dataSource;
      }
      async init() {
        // use our datasource to get the details for the current song. findsongById will return a promise! use await or .then() to process it
        this.song = await this.dataSource.findSongById(this.songId);
        // once we have the song details we can render out the HTML
        this.rendersongDetails("#song");
      }
      rendersongDetails(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML(
          "afterBegin",
          songDetailsTemplate(this.song)
        );}
}