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


import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { GestionEventosComponent } from './componentes/administrador/GestionEventos/gestion-eventos.component';
import { GestionComentariosComponent } from './componentes/administrador/GestionComentarios/gestion-comentarios.component';
import { GestionUsuariosComponent } from './componentes/administrador/GestionUsuarios/gestion-usuarios.component';
import { BuscarEgresadosComponent } from './componentes/administrador/BuscarEgresados/buscar-egresados.component';
import { EventoComponent } from './componentes/administrador/GestionEventos/evento/evento.component';
import { ComentarioComponent } from './componentes/administrador/GestionComentarios/comentario/comentario.component';
import { ComentariosComponent } from './componentes/egresado/comentarios/comentarios.component';
import { VercomentarioComponent } from './componentes/egresado/comentarios/vercomentario/vercomentario.component';
import { ComentaComponent } from './componentes/egresado/comentarios/comenta/comenta.component';


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
    AdministradorComponent,
    GestionEventosComponent,
    GestionComentariosComponent,
    GestionUsuariosComponent,
    BuscarEgresadosComponent,
    EventoComponent,
    ComentarioComponent,
    ComentariosComponent,
    VercomentarioComponent,
    ComentaComponent
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
