import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { lenses } from '../interface';

@Component({
  selector: 'app-lenses',
  templateUrl: './lenses.component.html',
  styleUrls: ['./lenses.component.css']
})
export class LensesComponent implements OnInit {
  @Input() lenses:lenses;
  @Input() show:boolean;
  @Output() event_name: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  select(){
    this.event_name.emit(this.lenses);
  }
  ngOnInit(): void {
  }

}
