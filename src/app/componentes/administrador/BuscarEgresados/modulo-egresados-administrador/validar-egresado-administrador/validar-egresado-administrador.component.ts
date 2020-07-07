import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';

@Component({
  selector: 'app-validar-egresado-administrador',
  templateUrl: './validar-egresado-administrador.component.html',
  styleUrls: ['./validar-egresado-administrador.component.css']
})
export class ValidarEgresadoAdministradorComponent implements OnInit {

  constructor(private token: TokenService) { }

  ngOnInit(): void {
    console.log(this.token.getEgresados())
  }

}
