import { Component, OnInit } from '@angular/core';
import { PostradoOtrosService } from 'src/app/servicios/PostradoOtrosService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-postgrado-documentos',
  templateUrl: './ver-postgrado-documentos.component.html',
  styleUrls: ['./ver-postgrado-documentos.component.css']
})
export class VerPostgradoDocumentosComponent implements OnInit {

  constructor(private route: ActivatedRoute,private PostradoOtrosService: PostradoOtrosService) { }
  ListPost;
  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.PostradoOtrosService.getById(id).subscribe(response=>{
      this.ListPost=response;
    })
  }

}
