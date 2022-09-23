import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormIngresoComponent } from '../components/form-ingreso/form-ingreso.component';
import { HeaderComponent } from '../components/header/header.component';


const Router: Routes = [
  {path: 'form-ingreso', component: FormIngresoComponent},
  {path: 'app', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(Router)],
  exports: [RouterModule]
})
export class RutasRoutingModule { }
