import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/servicios/JarwisService';
import { FormsModule } from '@angular/forms';
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

  Listusuarios;
  constructor(private JarwisService: JarwisService) { 
    
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
    this.JarwisService.usuarios().subscribe(response=>{
      this.Listusuarios=response;
    })
  }
  filtro(){
    this.form.nombre=this.nombre;
    this.form.dni=this.dni;
    this.form.ap_paterno=this.ap_paterno;
    this.form.ap_materno=this.ap_materno;
    this.form.rol=this.rol;
    this.JarwisService.usuariosFiltro(this.form).subscribe(response=>{
      this.Listusuarios=response;
    })
  }
}
