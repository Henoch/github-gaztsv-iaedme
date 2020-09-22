import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
  @Input() solicitud: {titulo: string};

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  constructor() { }

  ngOnInit() {
  }

 @Output() selected = new EventEmitter<string>();
 
 change() {
    this.selected.emit(this.solicitud.titulo);
  }
  
  
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'display-flex',
      fieldGroup: [
        {
          className: 'flex-1',
          type: 'input',
          key: 'firstName',
          templateOptions: {
            label: 'First Name',
          },
        },
        {
          className: 'flex-1',
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
          className: 'flex-2',
          type: 'input',
          key: 'street',
          templateOptions: {
            label: 'Street',
          },
        },
        {
          className: 'flex-1',
          type: 'input',
          key: 'cityName',
          templateOptions: {
            label: 'City',
          },
        },
        {
          className: 'flex-1',
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