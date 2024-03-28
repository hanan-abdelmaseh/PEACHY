import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //using reactive forms
  myForm!: FormGroup;
  constructor(private fb: FormBuilder , private _HomeService:HomeService){

  }
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(5)]],
    });
  }
  

  onSubmit(form: FormGroup) {
    //check data
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('phone', form.value.phone);
// submit datat 
    this._HomeService.login(this.myForm.value).subscribe(()=>{
      console.log("you are logged in ");
     
  
    })
  }

 
}
