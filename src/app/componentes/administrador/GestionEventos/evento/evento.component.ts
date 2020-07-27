import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventosService } from 'src/app/servicios/EventosService';
import { TokenService } from 'src/app/servicios/TokenService';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  InsertarImagen
  IDURL;
  id;
  eventoForm: FormGroup;
  constructor( private router: Router,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private EventoService: EventosService,
    private token:TokenService) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id !== null && this.id !== undefined){
        this.EventoService.getById(this.id).subscribe(response => {
        this.eventoForm.setValue(response);
        this.InsertarImagen="http://drive.google.com/uc?export=view&id="+response.link;
      });
    }else{
      this.InsertarImagen="http://drive.google.com/uc?export=view&id=1hb-6tyvWtLnmb5v-WjrpcYL1BzG0xqFg";
    }

    this.eventoForm = this.formBuild.group({
      id:  [''],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      fecha_inicio: ['', [Validators.required]],
      fecha_fin: ['', [Validators.required]],
      lugar: ['', [Validators.required]],
      link: ['', [Validators.required]],
      visible:[]
    });
  }
  verImagen(ID){
    this.InsertarImagen="http://drive.google.com/uc?export=view&id="+ID;
  }
  previsualizarImagen(){
    this.verImagen(this.eventoForm.value.link);
  }
  SubmitEvento() {
    if(this.id == null && this.id == undefined){

      console.log(this.eventoForm.value)
      this.EventoService.add(this.eventoForm.value,this.token.getComment()).subscribe(response => {
        this.router.navigateByUrl('/administrador/GestionarEventos');
      });
    }else{

      this.EventoService.update(this.id, this.eventoForm.value,this.token.getComment()).subscribe(response => {
        this.router.navigateByUrl('/administrador/GestionarEventos');
      });
     this.eventoForm.reset()
    }
    
  }
  borrar(){
    this.eventoForm.reset()
  }
}
