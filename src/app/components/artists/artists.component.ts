import { Component, OnInit } from "@angular/core";
import { ArtistsService } from "./artists.service";

@Component({
  selector: "app-artists",
  templateUrl: "./artists.component.html",
  styleUrls: ["./artists.component.css"]
})
export class ArtistsComponent implements OnInit {
  data: any[];
  constructor(private _artistsservice: ArtistsService) {
    this.data = _artistsservice.getData();
  }

  ngOnInit() {}
}
