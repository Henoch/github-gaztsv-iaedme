import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "./field.interface";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { HijoComponent } from "./components/hijo/hijo.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  regConfig: FieldConfig[] = [    
    {
      type: "select",
      label: "Cuantitativo",
      name: "cuantitativo",
      value: null,
      options: [
         {key: '1',  value: 'Sí'},
          {key: '2',  value: 'No'},
      ],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Cuantitativo es requerido"
        }
      ]
    },
     {
      type: "button",
      label: "GUARDAR"
    }
  ];

  submit(value: any) {
  console.log(value)

  }


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

}
