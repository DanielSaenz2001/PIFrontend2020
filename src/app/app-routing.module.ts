import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/sistema/login/login.component';
import { RegistrarseComponent } from './componentes/sistema/registrarse/registrarse.component';
import { HomeComponent } from './componentes/egresado/home/home.component';
import { RequestResetComponent } from './componentes/sistema/contraseña/request-reset/request-reset.component';
import { ResponseResetComponent } from './componentes/sistema/contraseña/response-reset/response-reset.component';
import { PersonaFormComponent } from './componentes/egresado/persona/persona-form/persona-form.component';
import { EventosComponent } from './componentes/egresado/eventos/eventos.component';



import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { GestionEventosComponent } from './componentes/administrador/GestionEventos/gestion-eventos.component';
import { EventoComponent } from './componentes/administrador/GestionEventos/evento/evento.component';
import { GestionComentariosComponent } from './componentes/administrador/GestionComentarios/gestion-comentarios.component';
import { GestionUsuariosComponent } from './componentes/administrador/GestionUsuarios/gestion-usuarios.component';
import { BuscarEgresadosComponent } from './componentes/administrador/BuscarEgresados/buscar-egresados.component';
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



//guards
import { AfterLoginService } from './guard/after-login.service';
import { BeforeLoginService } from './guard/BeforeLoginService';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [BeforeLoginService]},

  {path: 'registrarse', component: RegistrarseComponent, canActivate: [BeforeLoginService]},
  {path: 'home', component: HomeComponent,canActivate: [AfterLoginService]},
  {path: 'ValidacionPersona',component: PersonaFormComponent},
  {path: 'RecuperarContraseña',component: RequestResetComponent, canActivate: [BeforeLoginService]},
  {path: 'CambiarContraseña',component: ResponseResetComponent , canActivate: [BeforeLoginService]},

  {path: 'eventos', component: EventosComponent, canActivate: [AfterLoginService]},
  {path: 'comentarios', component: ComentariosComponent, canActivate: [AfterLoginService]},
  {path: 'vercomentarios/:id', component: VercomentarioComponent, canActivate: [AfterLoginService]},
  {path: 'Comentario', component: ComentaComponent, canActivate: [AfterLoginService]},
  {path: 'Comentario/:id', component: ComentaComponent, canActivate: [AfterLoginService]},

  {path: 'administrador', component: AdministradorComponent, canActivate: [AfterLoginService],
  children: [
    {
      path: 'GestionarEventos',
      component: GestionEventosComponent
    },
    {
      path: 'GestionarComentarios',
      component: GestionComentariosComponent
    },
    {
      path: 'Gestionarusuarios',
      component: GestionUsuariosComponent
    },
    {
      path: 'Gestionarusuarios/Usuarios/:id',
      component: UsuariosComponent
    },
    {
      path: 'GestionarEventos/evento',
      component: EventoComponent
    },
    {
      path: 'GestionarEventos/evento/:id',
      component: EventoComponent
    },
    {
      path: 'GestionarComentarios/comentario/:id',
      component: ComentarioComponent
    },
    {
      path: 'BuscarEgresado',
      component: BuscarEgresadosComponent
    }
  ]},
  
  {path: 'administrador/egresado/:id', component: ModuloEgresadosAdministradorComponent, canActivate: [AfterLoginService],
  children: [
    {
      path: 'DatosEgresados',
      component: DatosEgresadoAdministradorComponent
    },
    {
      path: 'Postgrado-otros',
      component: PostgradosOtrosAdministradorComponent
    },
    {
      path: 'ExperienciaLaboral',
      component: ExperienciaLaboralAdministradorComponent
    },

    {
      path: 'Documentos-Experiencia',
      component: ExperienciaDocumentoAdministradorComponent
    },
    {
      path: 'Documentos-Experiencia/:id',
      component: ExperienciaDocumentoAdministradorComponent
    },
    {
      path: 'Ver-Documentos-Experiencia/:id',
      component: VerExperienciaAdministradorComponent
    },
    {
      path: 'Documentos-Postragdo',
      component: PostgradoDocumentosAdministradorComponent
    },
    {
      path: 'Documentos-Postragdo/:id',
      component: PostgradoDocumentosAdministradorComponent
    },
    {
      path: 'Ver-Documentos-Postragdo/:id',
      component: VerPostgradoAdministradorComponent
    },
    {
      path: 'DatosEgresados/actualizar/:id',
      component: ActualizarDatosPersonalesAdministradorComponent
    }
  ]},

  {path: 'egresados',component: ModuloEgresadoComponent /*, canActivate: [AfterLoginService]*/,
  children: [
    {
      path: 'DatosEgresados',
      component: DatosPersonalesComponent
    },
    {
      path: 'ValidarEgresado',
      component: ValidarEgresadoComponent
    },
    {
      path: 'ExperienciaLaboral',
      component: ExperienciaLaboralComponent
    },
    {
      path: 'Documentos-Experiencia',
      component: ExperienciaDocumentoComponent
    },
    {
      path: 'Documentos-Experiencia/:id',
      component: ExperienciaDocumentoComponent
    },
    {
      path: 'Ver-Documentos-Experiencia/:id',
      component: VerExperienciaComponent
    },
    {
      path: 'Postgrado-otros',
      component: PostgradosOtrosComponent
    },
    {
      path: 'Documentos-Postragdo',
      component: PostgradoDocumentosComponent
    },
    {
      path: 'Documentos-Postragdo/:id',
      component: PostgradoDocumentosComponent
    },
    {
      path: 'Ver-Documentos-Postragdo/:id',
      component: VerPostgradoDocumentosComponent
    },
    {
      path: 'DatosEgresados/actualizar/:id',
      component: ActualizarDatosPersonalesComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
