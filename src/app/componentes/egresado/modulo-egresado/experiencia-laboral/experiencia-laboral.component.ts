import { Component, OnInit } from '@angular/core';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { TokenService } from 'src/app/servicios/TokenService';
import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css'],
  providers: [DatePipe]
})
export class ExperienciaLaboralComponent implements OnInit {

  constructor(private Validador: ValidadoresService,
    private Token: TokenService,
    private Egresado : EgresadoService,
    private datePipe: DatePipe) { }
    ListExperiencia;
    ListEstado;
    pageActual: number = 1;
    public estado={
      fecha_estado:null,
      estado:null
    }
  ngOnInit(): void {
    this.listar();
  }
  listar(){
    
    this.Validador.egresadoPostgrado(this.Token.getAuth()).subscribe(response=>{
      this.ListExperiencia=response.experiencia;
      this.ListEstado=response.estado;
      if(response.estado.fecha_estado == null && response.estado.estado == 0){
        let myDate = new Date();
        let fecha = this.datePipe.transform(myDate, 'yyyy-MM-dd');
        this.estado.estado=0;
        this.estado.fecha_estado=fecha;

        this.Egresado.EstadoEgresado(response.estado.egresado_id,this.estado,this.Token.getEg()).subscribe(response=>{
          this.listar();
        })
      }
      let fec_actual = new Date();
      let fec_estado = new Date(response.estado.fecha_estado);
      
      


      let fec_dif = fec_actual.getFullYear() - fec_estado.getFullYear();
      
  

      let ano_mes = fec_dif * 12;

      let mes_dif_actual = ano_mes + (fec_actual.getMonth()+ 1)
      let mes_dif_estado = (fec_estado.getMonth()+ 1)


      let mes_dif =mes_dif_actual - mes_dif_estado;
      
      console.log(mes_dif)
      console.log(response.estado.estado)


      if((mes_dif >= 3 && mes_dif < 5) && (response.estado.estado == 0 || response.estado.estado == 3)){
        this.estado.estado=1;
        console.log("estoy actualizando")
        this.Egresado.EstadoEgresado(response.estado.egresado_id,this.estado,this.Token.getEg()).subscribe(response=>{
          this.listar();
        })
      }
      if(mes_dif >= 5 && (response.estado.estado == 1 || response.estado.estado == 2)){
        let fecha = this.datePipe.transform(fec_actual, 'yyyy-MM-dd');
        this.estado.estado=0;
        this.estado.fecha_estado=fecha;

        this.Egresado.EstadoEgresado(response.estado.egresado_id,this.estado,this.Token.getEg()).subscribe(response=>{
          this.listar();
        })
      }
    })
  }
}
