import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router){ 
   
    this.form= this.formBuilder.group({
      name: ['',[Validators.required, Validators.min(5), Validators.max(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
      rpassword:['', [Validators.required,Validators.minLength(8)]],
      email:['', [Validators.required, Validators.email]],
   })
  }

  ngOnInit() {}
  get Name(){
    return this.form.get("name");
  }

  get Password(){
    return this.form.get("password");
  }

  get Rpassword(){
    return this.form.get("rpassword");
  }
 
  get Mail(){
   return this.form.get("email");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get RpasswordValid(){
    return this.Rpassword?.touched && !this.Rpassword?.valid;
  }

  get MailValid() {
    return false
  }
 

  onSubmit(event: Event){
    event.preventDefault; 
 
    if (this.form.valid){
      alert("¡Bienvenido!")
    }else{    
      this.form.markAllAsTouched(); 
    }
 
  }

  inicio(){
    this.router.navigate(['']);
  }


}