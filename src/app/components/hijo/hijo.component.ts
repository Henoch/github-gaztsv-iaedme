import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig, FormlyFormOptions } from "@ngx-formly/core";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.css"]
})
export class HijoComponent implements OnInit {
  @Input() solicitud: { titulo: string };
  @Output() selected = new EventEmitter<string>();

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor() {}
  ngOnInit() {}

  change() {
    this.selected.emit(this.solicitud.titulo);
  }

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: "row mb-5",
      fieldGroup: [
        {
          className: "col-12 col-lg-6 form-group",
          key: "cuantitativo",
          type: "select",
          templateOptions: {
            label: "Cuantitativo",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "actualizados",
          type: "select",
          templateOptions: {
            label: "Datos actualizados",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "congruencia",
          type: "select",
          templateOptions: {
            label: "Congruencia documento-mapa",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "congruenciadoc",
          type: "select",
          templateOptions: {
            label: "Congruencia de datos en documentos",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "redaccion",
          type: "select",
          templateOptions: {
            label: "Redacción y estilo",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        }
        
      ]
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
