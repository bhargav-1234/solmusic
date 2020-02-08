import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WorksService {
  constructor() {}

  getContent() {
    return [
      {
        img: "../../../assets/img/brain.png",
        head: "Creat an account",
        para:
          "orem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida"
      },
      {
        img: "../../../assets/img/pointer.png",
        head: "Choose a plan",
        para:
          "orem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida"
      },
      {
        img: "../../../assets/img/smartphone.png",
        head: "Download music",
        para:
          "orem ipsum dolor sit amet, consectetur adipi-scing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida"
      }
    ];
  }
}
