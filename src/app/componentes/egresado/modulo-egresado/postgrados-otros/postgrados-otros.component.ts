import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';

@Component({
  selector: 'app-postgrados-otros',
  templateUrl: './postgrados-otros.component.html',
  styleUrls: ['./postgrados-otros.component.css']
})
export class PostgradosOtrosComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private Token: TokenService) { }
    ListPostgrados;
  ngOnInit(): void {
    this.Validador.egresadoPostgrado(this.Token.get()).subscribe(response=>{
      this.ListPostgrados=response.postgrados;
    })
  }

}