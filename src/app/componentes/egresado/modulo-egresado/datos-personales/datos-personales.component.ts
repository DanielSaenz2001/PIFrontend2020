import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';
import { EgresadoService } from 'src/app/servicios/EgresadoService';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {
edad;
ListEgresado;
ListEscuelas;
ListPersona;
idegresado;
ListImagen;

  constructor(
    private EgresadoService: EgresadoService,
    private Validador: ValidadoresService, 
    private Token: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.Validador.DatosPersona(this.Token.getAuth()).subscribe(response=>{
      this.idegresado = response.user_ID;
      if(response.validado == 0){
        this.router.navigateByUrl('/egresados/ValidarEgresado');
      }else{
        this.listar();
      }
    })
  }
  listar(){
    this.Validador.personaEgresado
    (this.Token.getAuth()).subscribe(response=>{
      let newDate=response.persona.fec_nacimiento+"T00:00:00"; 
      let nacimiento = new Date(newDate);
      let timeDiff = Math.abs(Date.now() - nacimiento.getTime());   
      let edad =Math.floor(timeDiff / 31556926000);
      this.edad=edad;
      this.ListPersona= response.persona;
      this.ListEscuelas= response.escuela;
      this.ListEgresado= response.egresado;
      this.ListImagen= response.imagen;
    })
  }
}
