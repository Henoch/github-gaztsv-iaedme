import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() todo: {checked: boolean, text: string};
  constructor() { }

  ngOnInit() {
  }

 @Output() selected = new EventEmitter<{checked: boolean, text: string}>();
 
  change(event: any): void {
    this.selected.emit(this.todo);
  }

}