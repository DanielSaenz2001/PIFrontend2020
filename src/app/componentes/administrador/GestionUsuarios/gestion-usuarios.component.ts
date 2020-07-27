import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/UsuariosService';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  nombre;
  dni;
  rol;
  ap_paterno;
  ap_materno;
  pageActual: number = 1;

  Listusuarios;
  constructor(private UsuariosService: UsuariosService) { 
    
  }
  public form={
    nombre:'',
    dni:'',
    ap_paterno:'',
    ap_materno:'',
    rol:''
  }
  ngOnInit(): void {
    this.ListUsuarios();
  }
  ListUsuarios(){
    this.UsuariosService.usuarios().subscribe(response=>{
      this.Listusuarios=response;
    })
  }
  filtro(){
    this.form.nombre=this.nombre;
    this.form.dni=this.dni;
    this.form.ap_paterno=this.ap_paterno;
    this.form.ap_materno=this.ap_materno;
    this.form.rol=this.rol;
    this.UsuariosService.usuariosFiltro(this.form).subscribe(response=>{
      this.pageActual=1;
      this.Listusuarios=response;
    })
  }
}
