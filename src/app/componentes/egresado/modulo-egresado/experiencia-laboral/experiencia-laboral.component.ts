import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private Token: TokenService) { }
    ListExperiencia;
    ListEstado;
  ngOnInit(): void {
    this.Validador.egresadoPostgrado(this.Token.get()).subscribe(response=>{
      this.ListExperiencia=response.experiencia;
      this.ListEstado=response.estado;
      
    })
  }

}
