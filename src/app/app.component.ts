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
  component1 = HijoComponent;
  component2 = HijoComponent;
  component3 = HijoComponent;
  component4 = HijoComponent;

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

   todoInputs3 = {
    solicitud: {
      titulo: 'Criterios generales 3'
    }
  };

  todosOutputs3 = {
    selected: (e: any) => {
      console.log(e);
    }
  };

   todoInputs4 = {
    solicitud: {
      titulo: 'Criterios generales 4'
    }
  };

  todosOutputs4 = {
    selected: (e: any) => {
      console.log(e);
    }
  };

}
