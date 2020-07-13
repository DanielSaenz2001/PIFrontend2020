import { Component, OnInit } from '@angular/core';
import { EgresadoService } from 'src/app/servicios/EgresadoService';

@Component({
  selector: 'app-registrar-egresado',
  templateUrl: './registrar-egresado.component.html',
  styleUrls: ['./registrar-egresado.component.css']
})
export class RegistrarEgresadoComponent implements OnInit {

  constructor(private EgresadoService:EgresadoService) { }
  codigo;

  Sihay;
  Nohay;
  Egresado;

  public form={
    codigo:''
  }
  ngOnInit(): void {
   this.Sihay = false;
   this.Nohay = false;
   this.Egresado = false;
  }
  buscar(){
    this.form.codigo= this.codigo;
    this.Nohay = false;
    this.Sihay = false;
    this.Egresado = false;
    this.EgresadoService.getEgresadoCodigo(this.form).subscribe(response=>{
      if(response.egresado !== null && response.upeu == null){
        this.Sihay = "El egresado esta registrado en nuestra base de datos";
      }
      if(response.egresado == null && response.upeu !== null){
        this.Egresado = response.upeu;
        console.log(response.upeu)
      }
      if(response.egresado == null && response.upeu == null){
        this.Nohay = "El egresado esta no registrado en ninguna de nuestra base de datos";
      }
    })
  }
  agregar(){
    console.log("agregando egresado p")
  }
}
