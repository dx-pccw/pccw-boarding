import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

interface Post {
  start_date: Date;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent{

  date: Post = {
    start_date: new Date()
  }

  profileForm = this.fb.group({
    name: ['', Validators.required],
    position: ['', Validators.required],
    start_date: [this.date.start_date, [Validators.required]],
    manager: ['', Validators.required]
  });
  http: any;

  constructor(private fb: FormBuilder) { }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
/*
  onSubmit(): void{
    const formObj ={
     name: this.profileForm.value.name,
     position: this.profileForm.value.position,
     start_date: this.profileForm.value.start_date,
     manager: this.profileForm.value.manager,
    }
   this.http.post('http://127.0.0.1:3307/root', formObj).subscribe(res =>
 }
*/
}
