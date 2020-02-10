import { Component, OnInit } from "@angular/core";
import { SubscriptionService } from "./subscription.service";
@Component({
  selector: "app-subscription",
  templateUrl: "./subscription.component.html",
  styleUrls: ["./subscription.component.css"]
})
export class SubscriptionComponent implements OnInit {
  date: any[];
  constructor(private _SubscriptionService: SubscriptionService) {
    this.date = _SubscriptionService.getDate();
  }

  ngOnInit() {}
}
