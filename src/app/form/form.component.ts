import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { form } from '../interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() list_form: form[]
  @Input() show: boolean;
  @Output() event_name: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
  update(x1: number, x2: number, x3: number, x4: number,) {
    this.list_form[0].value_ = x1;
    this.list_form[1].value_ = x2;
    this.list_form[2].value_ = x3;
    this.list_form[3].value_ = x4;
    console.log(this.list_form);
    this.event_name.emit()
  }
  ngOnInit(): void {
  }

}
