import { Component, OnInit } from "@angular/core";
import { WorksService } from "./works.service";

@Component({
  selector: "app-works",
  templateUrl: "./works.component.html",
  styleUrls: ["./works.component.css"]
})
export class WorksComponent implements OnInit {
  content: any[];

  constructor(private _worksservice: WorksService) {
    this.content = _worksservice.getContent();
  }
  ngOnInit() {}
}
