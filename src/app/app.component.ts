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
  
 counter = this.tabs.length + 1;
  active = '1';

  categoria: {key: string, value: string}[] =  [
    {key: '1',  value: 'Tab 1'},
     {key: '2',  value: 'tab 2'},
 ];

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
