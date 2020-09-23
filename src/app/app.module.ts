import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PadreComponent } from "./components/padre/padre.component";
import { NgxDyncmpModule } from '@flywine93/ngx-dyncmp';
import { HijoComponent } from './components/hijo/hijo.component';
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";

export function ValidatorMessage(err, field: FormlyFieldConfig) {
  return `"${field.templateOptions.label}" es un campo requerido`;
}

@NgModule({
  declarations: [
    AppComponent, 
    PadreComponent,
    HijoComponent    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDyncmpModule,
     FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: ValidatorMessage  },
      ],
    }),
    FormlyBootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [   
    HijoComponent,   
  ]
})
export class AppModule {}
