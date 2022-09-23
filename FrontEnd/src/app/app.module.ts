import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { Routes } from '@angular/router';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';
import { RutasModule } from './rutas/rutas.module';
import { RouterModule } from '@angular/router';

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
  ],
  imports: [
    BrowserModule,
    RutasModule,
    RouterModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
