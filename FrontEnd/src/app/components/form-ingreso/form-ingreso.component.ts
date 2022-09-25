import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.css']
})
export class FormIngresoComponent implements OnInit {

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
      date: ['', [Validators.required]],
      email: ['', [Validators.required]],
      text: ['', [Validators.maxLength(20)]],
      category: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });

    this.form.valid
    this.form.invalid
    
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
  
  get nameField(){
    return this.form.get('name');
  }

  get dateField(){
    return this.form.get('date');
  }

  get emailField(){
    return this.form.get('email');
  }

  get textField(){
    return this.form.get('text');
  }

  get categoryField(){
    return this.form.get('category');
  }

  get genderField(){
    return this.form.get('gender');
  }


}
