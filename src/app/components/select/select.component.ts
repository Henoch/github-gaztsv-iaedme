import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-select",
  template: `
  <div class="col-12 col-lg-4 col-md-6 form-group" [formGroup]="group">
      <label >field.label</label>
      <select class="form-control select required" required="required" aria-required="true"
          name="" id="" [formControlName]="field.name">
          <option value=""></option>
          <option *ngFor="let item of field.options" [value]="item">{{item}}</option>
      </select>
  </div>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
