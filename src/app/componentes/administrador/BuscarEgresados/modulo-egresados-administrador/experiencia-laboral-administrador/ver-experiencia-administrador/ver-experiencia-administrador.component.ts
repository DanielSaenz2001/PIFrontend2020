import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { ExperienciaLaboralService } from 'src/app/servicios/ExperienciaLaboralService';
import { ActivatedRoute } from '@angular/router';
import { ValidarExpService } from 'src/app/servicios/validarExpService';

@Component({
  selector: 'app-ver-experiencia-administrador',
  templateUrl: './ver-experiencia-administrador.component.html',
  styleUrls: ['./ver-experiencia-administrador.component.css']
})
export class VerExperienciaAdministradorComponent implements OnInit {

  constructor(private token: TokenService,
    private route: ActivatedRoute,
    private validarexp: ValidarExpService,
    private ExperienciaLaboralService: ExperienciaLaboralService) { }
    ListExp;
    id;
    exp_id;
    exp;
  ngOnInit(): void {
    this.id=this.token.getEgresados();
    let id = this.route.snapshot.paramMap.get('id');
    this.exp_id = id;
    this.ExperienciaLaboralService.getById(id).subscribe(response=>{
      this.ListExp=response;
      this.validarexp.getById(id,this.token.getEg()).subscribe(hola=>{
        this.exp =Object.entries(hola).length
      })
    })
  }

}
