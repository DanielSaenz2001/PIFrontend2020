import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';

@Component({
  selector: 'app-postgrados-otros-administrador',
  templateUrl: './postgrados-otros-administrador.component.html',
  styleUrls: ['./postgrados-otros-administrador.component.css']
})
export class PostgradosOtrosAdministradorComponent implements OnInit {

  constructor(private token: TokenService,
    private AdministradorEgresadoService:AdministradorEgresadoService) { }
  ListPostgrados;
  pageActual: number = 1;

  public form={
    idusuario:''
  }

  public form2={
    idegresado:''
  }
  ngOnInit(): void {
    this.form.idusuario=this.token.getUser();
    this.form2.idegresado=this.token.getEgresados();
    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.token.getEg()).subscribe(response=>{
      this.ListPostgrados=response.postgrados;
    })

  }

}
