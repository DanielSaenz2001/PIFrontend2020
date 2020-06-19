import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  InsertarImagen
  IDURL;
  constructor() { }

  ngOnInit(): void {
    this.InsertarImagen="http://drive.google.com/uc?export=view&id=1hb-6tyvWtLnmb5v-WjrpcYL1BzG0xqFg";
  }
  verImagen(ID){
    this.InsertarImagen="http://drive.google.com/uc?export=view&id="+ID;
  }
  previsualizarImagen(){
    console.log("hola")
    console.log(this.IDURL)
    this.verImagen(this.IDURL);
  }
}
