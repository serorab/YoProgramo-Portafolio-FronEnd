import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EstudioComponent } from './components/estudio/estudio.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HskComponent } from './components/hsk/hsk.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { Router, Routes } from '@angular/router';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EstudioComponent,
    HskComponent,
    ProyectoComponent,
    FooterComponent,
    SeccionesComponent,
    FormIngresoComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RoutingRoutingModule,
    FormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
