import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }
  LoginUser() {
    if (this.username === 'Admin' && this.password === 'admin123') {
      console.log('Welcome admin');
    }
  }

}
