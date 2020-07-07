import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/servicios/ExperienciaLaboralService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-experiencia',
  templateUrl: './ver-experiencia.component.html',
  styleUrls: ['./ver-experiencia.component.css']
})
export class VerExperienciaComponent implements OnInit {

  constructor(private route: ActivatedRoute,private ExperienciaLaboralService: ExperienciaLaboralService) { }
  ListExp;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.ExperienciaLaboralService.getById(id).subscribe(response=>{
      this.ListExp=response;
      console.log(response)
    })
  }

}
