import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/sistema/login/login.component';
import { RegistrarseComponent } from './componentes/sistema/registrarse/registrarse.component';
import { HomeComponent } from './componentes/egresado/home/home.component';
import { RequestResetComponent } from './componentes/sistema/contraseña/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/sistema/contraseña/response-reset/response-reset.component';
import { PersonaFormComponent } from './componentes/egresado/persona/persona-form/persona-form.component';
import { EventosComponent } from './componentes/egresado/eventos/eventos.component';


//guards
import { AfterLoginService } from './guard/after-login.service';
import { BeforeLoginService } from './guard/BeforeLoginService';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [BeforeLoginService]},
  {path: 'eventos', component: EventosComponent, canActivate: [AfterLoginService]},
  {path: 'registrarse', component: RegistrarseComponent, canActivate: [BeforeLoginService]},
  {path: 'home', component: HomeComponent,canActivate: [AfterLoginService]},
  {path: 'ValidacionPersona',component: PersonaFormComponent},
  {path: 'RecuperarContraseña',component: RequestResetComponent, canActivate: [BeforeLoginService]},
  {path: 'CambiarContraseña',component: ResponseResetComponent , canActivate: [BeforeLoginService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
