import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() solicitud: {titulo: string};
  constructor() { }

  ngOnInit() {
  }

 @Output() selected = new EventEmitter<string>();
 
 change() {
    this.selected.emit(this.solicitud.titulo);
  }
  
}