import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { HijoComponent } from "./components/hijo/hijo.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  component1 = HijoComponent;
  component2 = HijoComponent;
  


  todoInputs1 = {
    solicitud: {
      titulo: 'Criterios generales 1'
    }
  };

  todosOutputs1 = {
    selected: (e: any) => {
      console.log(e);
    }
  };

   todoInputs2 = {
    solicitud: {
      titulo: 'Criterios generales 2'
    }
  };

  todosOutputs2 = {
    selected: (e: any) => {
      console.log(e);
    }
  };
}
