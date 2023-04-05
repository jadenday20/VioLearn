import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        assignments: resolve(__dirname, "src/assignments/index.html"),
        login: resolve(__dirname, "src/login/index.html"),
        sheet_music: resolve(__dirname, "src/sheet_music/index.html"),
        metronome: resolve(__dirname, "src/metronome/index.html"),
        songs: resolve(__dirname, "src/songs/index.html"),
      },
    },
  },
});
