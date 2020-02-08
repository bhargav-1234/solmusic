import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ArtistsService {
  constructor() {}
  getData() {
    return [
      {
        img: "../../../assets/img/2.jpg",
        head: "Solmusic"
      },
      {
        img: "../../../assets/img/1.jpg",
        head: "Live Concerts"
      },
      {
        img: "../../../assets/img/player-bg.jpg",
        head: "Dj Sets"
      },
      {
        img: "../../../assets/img/wave-thumb.jpg",
        head: "Live Streems"
      }
    ];
  }
}
