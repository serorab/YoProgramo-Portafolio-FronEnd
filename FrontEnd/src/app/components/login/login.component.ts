import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) {
      this.buildForm();
    }

  ngOnInit(): void {
  }
  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['',[Validators.required]],      
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.form.valueChanges
    .pipe(
      debounceTime(500)
    )

  }

  save(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      console.log(value); 
    } else{
      this.form.markAllAsTouched();
    }
  }
}
