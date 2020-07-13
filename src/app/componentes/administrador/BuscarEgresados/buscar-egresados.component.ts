import { Component, OnInit } from '@angular/core';
import { EgresadoService } from 'src/app/servicios/EgresadoService';

@Component({
  selector: 'app-buscar-egresados',
  templateUrl: './buscar-egresados.component.html',
  styleUrls: ['./buscar-egresados.component.css']
})
export class BuscarEgresadosComponent implements OnInit {
  nombre;
  dni;
  ap_paterno;
  ap_materno;
  codigo;
  egreso;
  estado;
  ListaEgresado;
  constructor(private EgresadoService:EgresadoService) { }
  public form={
    nombre:'',
    dni:'',
    ap_paterno:'',
    ap_materno:'',
    codigo:'',
    egreso:'',
    estado:''
  }
  ngOnInit(): void {
    this.EgresadoService.getlist().subscribe(response=>{
      this.ListaEgresado=response;
      console.log(response)
    })
  }
  filtrar(){
    this.form.nombre=this.nombre;
    this.form.dni=this.dni;
    this.form.ap_paterno=this.ap_paterno;
    this.form.ap_materno=this.ap_materno;
    this.form.codigo=this.codigo;
    this.form.egreso=this.egreso;
    this.form.estado=this.estado;
    this.EgresadoService.EgresadoFiltro(this.form).subscribe(response=>{
      console.log(response)
      if(JSON.stringify(response)=='[]'){
        this.ListaEgresado=response;
        alert("El Egresado no existe registre el usuario si desea")
      }else{
        this.ListaEgresado=response;
      }
      
    })
  }

}
