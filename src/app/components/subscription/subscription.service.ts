import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SubscriptionService {
  constructor() {}

  getDate() {
    return [
      {
        img: "../../assets/img/check-icon.png",
        par: "Play any track"
      },
      {
        img: "../../assets/img/check-icon.png",
        par: "Listen offline"
      },
      {
        img: "../../assets/img/check-icon.png",
        par: "No ad interruption"
      },
      {
        img: "../../assets/img/check-icon.png",
        par: "Unlimted skips"
      },
      {
        img: "../../assets/img/check-icon.png",
        par: "High quality audio"
      },
      {
        img: "../../assets/img/check-icon.png",
        par: "Shuffle play"
      }
    ];
  }
}
