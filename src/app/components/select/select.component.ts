import { ChangeDetectorRef, Component, HostBinding, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
  selector: "app-select",
  template: `
  <div class="col-12 col-lg-4 col-md-6 form-group" [formGroup]="group">
      <label>{{field.label}}</label>
      <select class="form-control select required" required="required" aria-required="true"
          name="" id="" [formControlName]="field.name">
          <option value=""></option>
          <option *ngFor="let opt of field.options" [value]="opt.key">{{opt.value}}</option>
      </select>

      <ng-container *ngFor="let validation of field.validations;">
        <div *ngIf="group.get(field.name).hasError(validation.name)">{{validation.message}}</div>
      </ng-container>
  </div>
`,
  styles: []
})
export class SelectComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {
      
  }
}
