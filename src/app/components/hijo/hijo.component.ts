import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() solicitud: {titulo: string};
  @Output() selected = new EventEmitter<string>();

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor() {}
  ngOnInit() { }
 
  change() {
    this.selected.emit(this.solicitud.titulo);
  }
  
  
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'col-12 col-lg-6 form-group',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
          },
        },
        {
          className: 'col-12 col-lg-6 form-group',
          type: 'input',
          key: 'lastName',
          templateOptions: {
            label: 'Last Name',
          },
          expressionProperties: {
            'templateOptions.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      template: '<hr /><div><strong>Address:</strong></div>',
    },
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'col-12 col-lg-6 form-group',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'col-12 col-lg-6 form-group',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
        },
        {
          className: 'col-12 col-lg-6 form-group',
          type: 'input',
          key: 'zip',
          templateOptions: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ],
    },
    {
      template: '<hr />',
    },
    {
      type: 'input',
      key: 'otherInput',
      templateOptions: {
        label: 'Other Input',
      },
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      templateOptions: {
        label: 'Other Checkbox',
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}