import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/sistema/login/login.component';
import { RegistrarseComponent } from './componentes/sistema/registrarse/registrarse.component';
import { NavbarComponent } from './componentes/sistema/navbar/navbar.component';
import { RequestResetComponent } from './componentes/sistema/contraseña/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/sistema/contraseña/response-reset/response-reset.component';
import { HomeComponent } from './componentes/egresado/home/home.component';
import { PersonaFormComponent } from './componentes/egresado/persona/persona-form/persona-form.component';
import { PersonaModalComponent } from './componentes/egresado/persona/persona-modal/persona-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { EventosComponent } from './componentes/egresado/eventos/eventos.component';
import { BuscarComponent } from './componentes/administrador/buscar/buscar.component';
import { ComentariosComponent } from './componentes/administrador/comentarios/comentarios.component';
import { UsuariosComponent } from './componentes/administrador/usuarios/usuarios.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarseComponent,
    NavbarComponent,
    RequestResetComponent,
    ResponseResetComponent,
    HomeComponent,
    PersonaFormComponent,
    PersonaModalComponent,
    EventosComponent,
    BuscarComponent,
    ComentariosComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SnotifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
