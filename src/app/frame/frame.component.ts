import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { frame } from '../interface';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})



export class FrameComponent implements OnInit {
  @Input() frame:frame;
  @Input() show:boolean;
  @Output() event_name: EventEmitter<any> = new EventEmitter<any>();


  constructor() { 
    
  }
select(){
  this.event_name.emit(this.frame);
}
  ngOnInit(): void {
  }

}
