import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenService } from 'src/app/servicios/TokenService';
import { ValidadoresService } from 'src/app/servicios/validadores.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/guard/AuthService';

@Component({
  selector: 'app-modulo-egresados-administrador',
  templateUrl: './modulo-egresados-administrador.component.html',
  styleUrls: ['./modulo-egresados-administrador.component.css']
})
export class ModuloEgresadosAdministradorComponent implements OnInit {

  constructor(private Auth: AuthService,
    private router: Router,private route: ActivatedRoute,
    private token: TokenService, private Validador: ValidadoresService) { }

  id;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.token.DatosEgresados(this.id);
    this.listar();
  }

  listar(){
    this.Validador.RolUsuario(this.token.get()).subscribe(
      data => this.handleResponse(data),
      error => this.handleError()
    );
  }
  handleResponse(data) {
    console.log("fass")
    for (let i = 0; i < data.length; i++) {
      if(data[i].ROLEID == 1){
        
      }
      
    }
    
    
  }
  handleError() {
    this.token.remove();
    this.token.removeEgresado();
    this.token.removeUsuario();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/');
  }

}
