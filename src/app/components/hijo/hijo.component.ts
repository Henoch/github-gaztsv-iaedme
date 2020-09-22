import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() todo: {titulo: boolean};
  constructor() { }

  ngOnInit() {
  }

 @Output() selected = new EventEmitter<{checked: boolean, text: string}>();
 
  
}