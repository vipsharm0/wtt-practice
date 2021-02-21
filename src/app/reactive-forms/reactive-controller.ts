import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector:"base-reactive",
  templateUrl:"./reactive-view.html",
  styleUrls:['./reactive.css']
})
export class ReactivePractice{
  constructor(){

  }

  sampleName = new  FormControl('');
  userInfo = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(),
    desig: new FormControl(),
    salary: new FormControl(),
      addressGroup: new FormGroup({
        street:new FormControl(),
        postbox: new FormControl(),
        phone: new FormControl()
      })
  })

  onButtonClick(){
    this.sampleName.setValue("Vipin Sharma");
    this.userInfo.setValue({
       name:'Shivi',
      age:"3",
      desig:'student',
      salary:"100",
      addressGroup:{
        street: "gate no 1 sector 31",
        postbox:6877,
        phone:"76767876"
      }
    });
    
  }

  onButtonUpdate(){
    this.userInfo.patchValue({
      name:'shivani',
      addressGroup:{
        street: "gate no 1 sector 31"
      }
    });
  }

  formGroupSubmit(){
    console.log(this.userInfo.value)
  }



}