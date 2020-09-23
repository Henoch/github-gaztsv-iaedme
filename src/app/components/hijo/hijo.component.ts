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
      fieldGroupClassName: 'row mb-5',
      fieldGroup: [
        {
          className: 'col-12 col-lg-6 form-group',
      key: 'Select',
      type: 'select',
      templateOptions: {
        label: 'Select',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        options: [
          { value: 1, label: 'Option 1'  },
          { value: 2, label: 'Option 2'  },
          { value: 3, label: 'Option 3'  },
          { value: 4, label: 'Option 4'  },
        ],
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