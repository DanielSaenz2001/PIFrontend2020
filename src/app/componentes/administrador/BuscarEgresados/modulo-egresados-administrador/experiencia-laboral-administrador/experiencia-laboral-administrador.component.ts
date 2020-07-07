import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';

@Component({
  selector: 'app-experiencia-laboral-administrador',
  templateUrl: './experiencia-laboral-administrador.component.html',
  styleUrls: ['./experiencia-laboral-administrador.component.css']
})
export class ExperienciaLaboralAdministradorComponent implements OnInit {

  constructor(private token: TokenService,
    private AdministradorEgresadoService:AdministradorEgresadoService) { }
  ListExperiencia;
  ListEstado;
    id;
  public form={
    idusuario:''
  }

  ngOnInit(): void {
    this.form.idusuario=this.token.getUser();
    this.id=this.token.getEgresados();
    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.form).subscribe(response=>{
      this.ListExperiencia=response.experiencia;
      this.ListEstado=response.estado;
      console.log(response)
    })

  }

}
