import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Observable } from "rxjs";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
  animations: [
    trigger("listStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "scale(0.5)" }),
            stagger(
              "50ms",
              animate(
                "550ms ease-out",
                style({ opacity: 1, transform: "scale(1)" })
              )
            )
          ],
          { optional: true }
        ),
        query(":leave", animate("50ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class PostsComponent implements OnInit {
  posts$: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getPosts().subscribe(data => (this.posts$ = data));
  }
}
