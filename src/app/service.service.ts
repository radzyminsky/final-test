import { Injectable } from '@angular/core';
import { form, frame, lenses } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  list_frame:frame[];
  list_lenses:lenses[];
  list_form:form[]

  constructor() {

    this.list_frame=[
    {type:"one", select:false, imag:""},
    {type:"two", select:false, imag:""},
    {type:"three", select:false, imag:""},
    {type:"Four", select:false, imag:""},
    {type:"five", select:false, imag:""}
  ]

  this.list_lenses=[
    {type:'one',  select:false},
    {type:'two',  select:false},
    {type:'three',  select:false}
  ]

  this.list_form=[
    {typeInput:'left',value_:null},
    {typeInput:'right',value_:null},
    {typeInput:'leftCL',value_:null},
    {typeInput:'rightCL',value_:null}

  ]

   }
}
