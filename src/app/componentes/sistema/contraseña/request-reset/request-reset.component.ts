import { Component, OnInit } from '@angular/core';

import { JarwisService } from 'src/app/servicios/JarwisService';
@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {

  public form = {
    email: null
  };


  constructor(private Jarvis: JarwisService) { }

  ngOnInit() {
  }


  onSubmit() {
    this.Jarvis.sendPasswordResetLink(this.form).subscribe(
      data => this.handleResponse(data),
    );
  }

  handleResponse(res) {
    this.form.email = null;
  }

}
