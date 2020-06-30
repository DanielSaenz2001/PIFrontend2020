import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  constructor(
    private Validador: ValidadoresService, 
    private Token: TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.Validador.DatosPersona(this.Token.get()).subscribe(response=>{
      if(response.validado == 0){
        this.router.navigateByUrl('/egresados/ValidarEgresado');
      }else{
        this.listar();
      }
      
    })
  }
  listar(){
    console.log("ESTOY LISTANDOOOOO")
  }
}
