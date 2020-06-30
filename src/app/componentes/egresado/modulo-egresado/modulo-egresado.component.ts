import { Component, OnInit } from '@angular/core';
import {ValidadoresService} from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
@Component({
  selector: 'app-modulo-egresado',
  templateUrl: './modulo-egresado.component.html',
  styleUrls: ['./modulo-egresado.component.css']
})
export class ModuloEgresadoComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private Token: TokenService) { }

  ngOnInit(): void {
    this.Validador.RolUsuario(this.Token.get()).subscribe(response=>{

      for (let i = 0; i < response.length; i++) {
        if(response[i].ROLEID == 1){
          console.log("tienes apsesodx")
        }
        
      }

    })
    
  }

}
