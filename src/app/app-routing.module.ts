import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/sistema/login/login.component';
import { RegistrarseComponent } from './componentes/sistema/registrarse/registrarse.component';
import { HomeComponent } from './componentes/egresado/home/home.component';
import { RequestResetComponent } from './componentes/sistema/contraseña/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/sistema/contraseña/response-reset/response-reset.component';
import { PersonaFormComponent } from './componentes/egresado/persona/persona-form/persona-form.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  {path: 'home', component: HomeComponent},
  {path: 'RegistroPersona',component: PersonaFormComponent},
  {path: 'RecuperarContraseña',component: RequestResetComponent},
  {path: 'CambiarContraseña',component: ResponseResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
