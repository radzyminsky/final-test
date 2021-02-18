import { Component, OnInit } from '@angular/core';
import { form, frame, lenses } from '../interface';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list_frame:frame[];
  list_lenses:lenses[];
  list_form:form[];
  index:number;
  index2:number;
  show1:boolean;
  show2:boolean;
  show3:boolean;
  show4:boolean

  constructor(private allAraais:ServiceService) { 

    this.list_frame=allAraais.list_frame;
    this.list_lenses=allAraais.list_lenses;
    this.list_form=allAraais.list_form;
    this.show1=true;
    this.show2=false;
    this.show3=false;
    this.show4=false
  
  }

updateForm(){

}
updateFrame(x:frame){
  this.index=this.list_frame.findIndex(f=>f===x)
  this.list_frame[this.index].select=true;
  this.show1=false;
  this.show2=true;
}
updateLenses(x:lenses){
  this.index2=this.list_lenses.findIndex(f=>f===x)
  this.list_lenses[this.index2].select=true;
  this.show2=false;
  this.show3=true;

}
 
submit_(){
  this.show3=false;
  this.show4=true;
}

  ngOnInit(): void {
  }

}
