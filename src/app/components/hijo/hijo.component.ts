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
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
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
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
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
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
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
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
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
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        }
      ]
    },
    {
      className: "section-label",
      template:
        "<h5 class='mb-5'>Principios de ordenamiento territorial integral</h5>"
    },
    {
      fieldGroupClassName: "row mb-5",
      fieldGroup: [
        {
          className: "col-12 col-lg-6 form-group",
          key: "analisis",
          type: "select",
          templateOptions: {
            label: "Análisis",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "equidad",
          type: "select",
          templateOptions: {
            label: "Contribuye a la equidad",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "ordenamiento",
          type: "select",
          templateOptions: {
            label: "Promueve un ordenamiento territorial compacto / usos mixtos",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 col-lg-6 form-group",
          key: "innovacion",
          type: "select",
          templateOptions: {
            label: "Innovación",
            placeholder: "",
            description: "",
            required: true,
            options: [{ value: null, label: "" },{ value: 1, label: "Sí" }, { value: 2, label: "No" }]
          }
        },
        {
          className: "col-12 form-group",
          key: "redaccion",
          type: "textarea",
          templateOptions: {
            label: "Comentarios",
            placeholder: "",
            description: "",
            required: true,
          }
        }
      ]
    }
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
