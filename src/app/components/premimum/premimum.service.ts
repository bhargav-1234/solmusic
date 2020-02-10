import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class PremimumService {
  constructor() {}
  getDat() {
    return [
      {
        img: "../../../assets/img/11.jpg",
        head: "No ad interruptions",
        para: "Consectetur adipiscing elit"
      },
      {
        img: "../../../assets/img/22.jpg",
        head: "High Quality",
        para: "Ectetur adipiscing elit"
      },
      {
        img: "../../../assets/img/3.jpg",
        head: "Listen Offline",
        para: "Sed do eiusmod tempor"
      },
      {
        img: "../../../assets/img/4.jpg",
        head: "Download Music",
        para: "Adipiscing elit"
      }
    ];
  }
}
