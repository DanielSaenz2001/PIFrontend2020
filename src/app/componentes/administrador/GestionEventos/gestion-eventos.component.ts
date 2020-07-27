import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/servicios/EventosService';
import { TokenService } from 'src/app/servicios/TokenService';
@Component({
  selector: 'app-gestion-eventos',
  templateUrl: './gestion-eventos.component.html',
  styleUrls: ['./gestion-eventos.component.css']
})
export class GestionEventosComponent implements OnInit {
  eventos;
  constructor(private token:TokenService, private EventosService: EventosService) { }


  pageActual: number = 1;

  ngOnInit(): void {
    this.listarEventos();
  }

  listarEventos(){

    this.EventosService.getlist().subscribe(response => {
      this.eventos= response;
      console.log(response)
    });
  }
  eliminarEvento(id){
    this.EventosService.delete(id,this.token.getComment()).subscribe(response => {
      this.listarEventos();
    });
  }
  
 
}
