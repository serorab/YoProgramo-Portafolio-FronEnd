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
    private formBuilder: FormBuilder,
    private router: Router){ 
    this.form= this.formBuilder.group({
      name: ['',[Validators.required, Validators.min(5), Validators.max(12)]],
      password:['',[Validators.required, Validators.minLength(8)]],
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
 
  get Mail(){
   return this.form.get("email");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false
  }
 

  onEnviar(event: Event){
    event.preventDefault; 
 
    if (this.form.valid){
      alert("¡Bienvenido!")
    }else{    
      this.form.markAllAsTouched(); 
    }
 
  }

  Registro(){
    this.router.navigate(['/registro'])
  }


}