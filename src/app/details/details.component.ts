import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import { ActivatedRoute } from "@angular/router";

import { User } from "../user";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.scss"]
})
export class DetailsComponent implements OnInit {
  user$: User;

  constructor(private route: ActivatedRoute, private data: DataService) {
    this.route.params.subscribe(params => (this.user$ = params.id));
  }

  ngOnInit() {
    this.data
      .getUser(this.user$)
      .subscribe((data: User) => (this.user$ = data));
  }
}
