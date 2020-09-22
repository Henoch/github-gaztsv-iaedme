import { Component, OnInit } from "@angular/core";
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: "app-padre",
  templateUrl: "./padre.component.html",
  styleUrls: ["./padre.component.css"]
})
export class PadreComponent implements OnInit {
  component = HijoComponent;

  todoInputs = {
    todo: {
      checked: false,
      text: "Do Homework"
    }
  };

  todosOutputs = {
    selected: (e: any) => {
      console.log(e);
    }
  };

  constructor() {}

  ngOnInit() {}
}
