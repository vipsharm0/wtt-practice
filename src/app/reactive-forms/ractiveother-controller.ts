import { Component } from "@angular/core";
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector:"base-other-reactive",
  templateUrl:"./reactiveother-view.html",
  styleUrls:['./reactiveother.css']
})
export class ReactiveOtherPractice{
  constructor(private fbuilder:FormBuilder){
  }

  formGroupSubmit(){
    console.log(this.userInfo)
  }


  userInfo =  this.fbuilder.group({
    firstName: ['', Validators.required],
    lastName: [''],
    addressGroup: this.fbuilder.group({
      street: ['', Validators.required],
      city: [''],
      state: [''],
      zip: ['']
    }),
    genders:this.fbuilder.array([
      this.fbuilder.control('')
    ])
  });

  
  get genders(){
    return this.userInfo.get('genders') as FormArray
  }

  addGenderCheckbox(){
    this.genders.push(this.fbuilder.control(''))
  }

}