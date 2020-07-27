import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/servicios/EventosService';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(private EventosService: EventosService) { }

  ngOnInit(): void {
    this.listarEventos();
  }
  eventos;
  pageActual: number = 1;
  evento;
  listarEventos(){
    this.EventosService.EventosDispo().subscribe( response =>{
      this.eventos = response;
      console.log(response);
    })
  }
  verEvento(id){
    this.EventosService.getById(id).subscribe(response=>{
      this.evento=response;
    })
  }
}
