import { Component, OnInit, Input } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-egresado-administrador',
  templateUrl: './datos-egresado-administrador.component.html',
  styleUrls: ['./datos-egresado-administrador.component.css']
})
export class DatosEgresadoAdministradorComponent implements OnInit {

  constructor(private token: TokenService, private AdministradorEgresadoService:AdministradorEgresadoService,
    private router: Router) { }
  id;
  edad
  ListEgresado;
  ListEscuelas;
  ListPersona;
  ListImagen;

  public form={
    idusuario:''
  }
  ngOnInit(): void {
    this.form.idusuario=this.token.getUser();
    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.form).subscribe(response=>{
      console.log(response)
      if(response.persona.validado == 0){
        this.router.navigateByUrl('/administrador/egresado/'+this.token.getEgresados() +'/ValidarEgresado');
      }else{
        let newDate=response.persona.fec_nacimiento+"T00:00:00"; 
        let nacimiento = new Date(newDate);
        let timeDiff = Math.abs(Date.now() - nacimiento.getTime());   
        let edad =Math.floor(timeDiff / 31556926000);
        this.edad=edad;
        this.ListPersona= response.persona;
        this.ListEscuelas= response.escuela;
        this.ListEgresado= response.egresado;
        this.ListImagen= response.imagen;
      }
    })
  }

}