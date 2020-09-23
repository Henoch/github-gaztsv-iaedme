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
          key: "Select",
          type: "select",
          templateOptions: {
            label: "Select",
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
