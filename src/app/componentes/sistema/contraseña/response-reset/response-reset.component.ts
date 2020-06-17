import { Component, OnInit } from '@angular/core';
import {  Router, ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/servicios/JarwisService';
@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error={
    password:null,
    email:null,
    password_confirmation: null
  };
  public form = {
    email : null,
    password : null,
    password_confirmation:null,
    resetToken :null
  }
  constructor(
    private route:ActivatedRoute,
    private Jarwis: JarwisService,
    private router:Router
  ) { 
    route.queryParams.subscribe(params => {
      this.form.resetToken = params['token']
    });
  }

  onSubmit(){
   this.Jarwis.changePassword(this.form).subscribe(
     data => this.handleResponse(data),
     error => this.handleError(error)
   )
  }
  handleResponse(data){

    let _router = this.router;
    _router.navigateByUrl('');
    
  }

  handleError(error){
    this.error = error.error.errors;
  }
  ngOnInit() {
   
  }

}
