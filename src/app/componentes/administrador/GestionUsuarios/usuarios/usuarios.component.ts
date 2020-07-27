import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/UsuariosService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from 'src/app/servicios/TokenService';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private token: TokenService,
    private route: ActivatedRoute,
    private formBuild: FormBuilder,
    private UsuariosService: UsuariosService) { }

    ListUsuario;
    ListRoles;
    RoleUserRolForm: FormGroup;
    AutorizadoUser: FormGroup;
    btnDisable;

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.UsuariosService.getById(id).subscribe(response=>{
      this.ListUsuario=response.usuario;
      this.ListRoles=response.roles;


      this.UsuariosService.getRolesById(this.ListUsuario.roles_users).subscribe(roles_users=>{
        this.RoleUserRolForm.setValue(roles_users);
      })
      this.UsuariosService.getUserAutorizadoById(this.ListUsuario.id).subscribe(autorizado=>{
        this.AutorizadoUser.setValue(autorizado);
      })
    })

    this.RoleUserRolForm = this.formBuild.group({
      id:  [''],
      role_id: ['', [Validators.required]],
      user_id: ['', [Validators.required]],
      updated_at: [],
      created_at: []
    });

    this.AutorizadoUser = this.formBuild.group({
      id:  [''],
      autorizado: ['', [Validators.required]],
    });

  }
  actualizar(){
    this.btnDisable=true;
    this.UsuariosService.actualizarRolUsuario(this.RoleUserRolForm.value.id,this.RoleUserRolForm.value,this.token.getAuth()).subscribe(response=>{
      this.UsuariosService.actualizarAutorizacionUsuario(this.AutorizadoUser.value.id,this.AutorizadoUser.value,this.token.getAuth()).subscribe(response=>{
        console.log(response)
        location.reload();
      })
    })
    
    
  }
}
