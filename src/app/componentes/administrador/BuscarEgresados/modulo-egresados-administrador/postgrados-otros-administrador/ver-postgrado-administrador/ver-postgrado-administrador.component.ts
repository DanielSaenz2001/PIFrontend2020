import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { ActivatedRoute } from '@angular/router';
import { PostradoOtrosService } from 'src/app/servicios/PostradoOtrosService';

@Component({
  selector: 'app-ver-postgrado-administrador',
  templateUrl: './ver-postgrado-administrador.component.html',
  styleUrls: ['./ver-postgrado-administrador.component.css']
})
export class VerPostgradoAdministradorComponent implements OnInit {
  ListPost;
  constructor(private token: TokenService,
    private route: ActivatedRoute,private PostradoOtrosService: PostradoOtrosService) { }
    id; 
  ngOnInit(): void {
    this.id = this.token.getEgresados();
    let id = this.route.snapshot.paramMap.get('id');
    this.PostradoOtrosService.getById(id).subscribe(response=>{
      this.ListPost=response;
    })
  }

}
