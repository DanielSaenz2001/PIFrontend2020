import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/servicios/TokenService';
import { AdministradorEgresadoService } from 'src/app/servicios/AdministradorEgresadoService';
import { EgresadoService } from 'src/app/servicios/EgresadoService';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experiencia-laboral-administrador',
  templateUrl: './experiencia-laboral-administrador.component.html',
  styleUrls: ['./experiencia-laboral-administrador.component.css'],
  providers: [DatePipe]
})
export class ExperienciaLaboralAdministradorComponent implements OnInit {
  
  constructor(private token: TokenService,
    private AdministradorEgresadoService:AdministradorEgresadoService,
    private Egresado : EgresadoService,
    private datePipe: DatePipe) { }
  ListExperiencia;
  ListEstado;
    id;
    pageActual: number = 1;
  public form={
    idusuario:''
  }
  public estado={
    fecha_estado:null,
    estado:null
  }
  ngOnInit(): void {
    
    this.listar();
    
  }
  listar(){
    this.form.idusuario=this.token.getUser();
    this.id=this.token.getEgresados();
    this.AdministradorEgresadoService.getEgresadoById(this.token.getEgresados(),this.token.getEg()).subscribe(response=>{
      this.ListExperiencia=response.experiencia;
      this.ListEstado=response.estado;
      
      if(response.egresado.fecha_estado == null && response.egresado.estado == 0){
        let myDate = new Date();
        let fecha = this.datePipe.transform(myDate, 'yyyy-MM-dd');
        this.estado.estado=0;
        this.estado.fecha_estado=fecha;

        this.Egresado.EstadoEgresado(this.token.getEgresados(),this.estado,this.token.getEg()).subscribe(response=>{
          this.listar();
        })
      }
      let fec_actual = new Date();
      let fec_estado = new Date(response.egresado.fecha_estado);
      
      


      let fec_dif = fec_actual.getFullYear() - fec_estado.getFullYear();
      
  

      let ano_mes = fec_dif * 12;

      let mes_dif_actual = ano_mes + (fec_actual.getMonth()+ 1)
      let mes_dif_estado = (fec_estado.getMonth()+ 1)


      let mes_dif =mes_dif_actual - mes_dif_estado;
      
      if((mes_dif+1 >= 3 && mes_dif+1 < 5) && response.egresado.estado == 0){
        this.estado.estado=1;

        this.Egresado.EstadoEgresado(this.token.getEgresados(),this.estado,this.token.getEg()).subscribe(response=>{
          this.listar();
        })
      }
      if(mes_dif+1 >= 5 && response.egresado.estado == 1){
        let fecha = this.datePipe.transform(fec_actual, 'yyyy-MM-dd');
        this.estado.estado=0;
        this.estado.fecha_estado=fecha;

        this.Egresado.EstadoEgresado(this.token.getEgresados(),this.estado,this.token.getEg()).subscribe(response=>{
          this.listar();
        })
      }
    })
  }

}
