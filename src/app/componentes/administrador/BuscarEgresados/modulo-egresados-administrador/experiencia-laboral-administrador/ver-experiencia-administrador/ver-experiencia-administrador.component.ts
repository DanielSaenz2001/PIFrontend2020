import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { ExperienciaLaboralService } from 'src/app/servicios/ExperienciaLaboralService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-experiencia-administrador',
  templateUrl: './ver-experiencia-administrador.component.html',
  styleUrls: ['./ver-experiencia-administrador.component.css']
})
export class VerExperienciaAdministradorComponent implements OnInit {

  constructor(private token: TokenService,
    private route: ActivatedRoute,private ExperienciaLaboralService: ExperienciaLaboralService) { }
    ListExp;
    id;
  ngOnInit(): void {
    this.id=this.token.getEgresados();
    let id = this.route.snapshot.paramMap.get('id');
    this.ExperienciaLaboralService.getById(id).subscribe(response=>{
      this.ListExp=response;
      console.log(response)
    })
  }

}
