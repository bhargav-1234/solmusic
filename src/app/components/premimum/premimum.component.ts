import { Component, OnInit } from "@angular/core";
import { PremimumService } from "./premimum.service";

@Component({
  selector: "app-premimum",
  templateUrl: "./premimum.component.html",
  styleUrls: ["./premimum.component.css"]
})
export class PremimumComponent implements OnInit {
  dat: any[];
  constructor(private _PremimumService: PremimumService) {
    this.dat = _PremimumService.getDat();
  }
  ngOnInit() {}
}
