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
import { ModuloEgresadoComponent } from './componentes/egresado/modulo-egresado/modulo-egresado.component';
import { DatosPersonalesComponent } from './componentes/egresado/modulo-egresado/datos-personales/datos-personales.component';
import { ValidarEgresadoComponent } from './componentes/egresado/modulo-egresado/validar-egresado/validar-egresado.component';
import { ActualizarDatosPersonalesComponent } from './componentes/egresado/modulo-egresado/datos-personales/actualizar-datos-personales/actualizar-datos-personales.component';
import { PostgradosOtrosComponent } from './componentes/egresado/modulo-egresado/postgrados-otros/postgrados-otros.component';
import { ExperienciaLaboralComponent } from './componentes/egresado/modulo-egresado/experiencia-laboral/experiencia-laboral.component';
import { PostgradoDocumentosComponent } from './componentes/egresado/modulo-egresado/postgrados-otros/postgrado-documentos/postgrado-documentos.component';
import { VerPostgradoDocumentosComponent } from './componentes/egresado/modulo-egresado/postgrados-otros/ver-postgrado-documentos/ver-postgrado-documentos.component';
import { VerExperienciaComponent } from './componentes/egresado/modulo-egresado/experiencia-laboral/ver-experiencia/ver-experiencia.component';
import { ExperienciaDocumentoComponent } from './componentes/egresado/modulo-egresado/experiencia-laboral/experiencia-documento/experiencia-documento.component';
import { UsuariosComponent } from './componentes/administrador/GestionUsuarios/usuarios/usuarios.component';
import { ModuloEgresadosAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/modulo-egresados-administrador.component';
import { DatosEgresadoAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/datos-egresado-administrador/datos-egresado-administrador.component';
import { PostgradosOtrosAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/postgrados-otros-administrador/postgrados-otros-administrador.component';
import { ExperienciaLaboralAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/experiencia-laboral-administrador/experiencia-laboral-administrador.component';

import { ActualizarDatosPersonalesAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/datos-egresado-administrador/actualizar-datos-personales/actualizar-datos-personales.component';
import { ExperienciaDocumentoAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/experiencia-laboral-administrador/experiencia-documento-administrador/experiencia-documento.component';
import { VerExperienciaAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/experiencia-laboral-administrador/ver-experiencia-administrador/ver-experiencia-administrador.component';
import { VerPostgradoAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/postgrados-otros-administrador/ver-postgrado-administrador/ver-postgrado-administrador.component';
import { PostgradoDocumentosAdministradorComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/postgrados-otros-administrador/postgrado-documentos-administrador/postgrado-documentos.component';
import { RegistrarEgresadoComponent } from './componentes/administrador/BuscarEgresados/registrar-egresado/registrar-egresado.component';
import { SidebarComponent } from './componentes/sistema/sidebar/sidebar.component';
import { ValidarExpeComponent } from './componentes/administrador/BuscarEgresados/modulo-egresados-administrador/experiencia-laboral-administrador/validar-expe/validar-expe.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
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
    ComentaComponent,
    ModuloEgresadoComponent,
    DatosPersonalesComponent,
    ValidarEgresadoComponent,
    ActualizarDatosPersonalesComponent,
    PostgradosOtrosComponent,
    ExperienciaLaboralComponent,
    PostgradoDocumentosComponent,
    VerPostgradoDocumentosComponent,
    VerExperienciaComponent,
    ExperienciaDocumentoComponent,
    UsuariosComponent,
    ModuloEgresadosAdministradorComponent,
    DatosEgresadoAdministradorComponent,
    PostgradosOtrosAdministradorComponent,
    ExperienciaLaboralAdministradorComponent,
    ActualizarDatosPersonalesAdministradorComponent,
    ExperienciaDocumentoAdministradorComponent,
    VerExperienciaAdministradorComponent,
    VerPostgradoAdministradorComponent,
    PostgradoDocumentosAdministradorComponent,
    RegistrarEgresadoComponent,
    SidebarComponent,
    ValidarExpeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SnotifyModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
