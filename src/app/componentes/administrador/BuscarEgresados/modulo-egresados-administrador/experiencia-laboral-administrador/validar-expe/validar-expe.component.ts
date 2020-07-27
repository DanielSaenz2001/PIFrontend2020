import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidarExpService } from 'src/app/servicios/validarExpService';
import { TokenService } from 'src/app/servicios/TokenService';
@Component({
  selector: 'app-validar-expe',
  templateUrl: './validar-expe.component.html',
  styleUrls: ['./validar-expe.component.css']
})
export class ValidarExpeComponent implements OnInit {

  constructor(private formBuild: FormBuilder,
    private validarexp: ValidarExpService,
    private token:TokenService) { }

    @Input() exp_id: string;
    @Input() exp;
    fecha;
    obser;
    apro;
  validarForm: FormGroup;
  ngOnInit(): void {

    this.validarexp.getById(this.exp_id,this.token.getEg()).subscribe(hola=>{
      this.exp =Object.entries(hola).length;
      if(this.exp == 0){
        
      }else{
        this.fecha =hola.fec_creac;
        this.obser =hola.observaciones;
        this.apro =hola.aprobado;
      }
      
      
    })
    this.validarForm = this.formBuild.group({
      id:  [''],
      observaciones: ['', [Validators.required]],
      fec_creac: ['', [Validators.required]],
      aprobado: ['', [Validators.required]],
      exp_id : this.exp_id,
      user_admin_id :this.token.getUser(),
    });
    

  }
  agregar(){
    console.log(this.validarForm.value)
    this.validarexp.add(this.validarForm.value,this.token.getEg()).subscribe(response=>{
      window.location.reload();
    })
  }
}
