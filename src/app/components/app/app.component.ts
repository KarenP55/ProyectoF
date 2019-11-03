import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Ingreso de Datos';

  Articulos = [
    {'name': 'leche',sector:'Lateos', cantidad:'5'},
    {'name': 'Sandias',sector:'Futas y verduras',cantidad:'4'}
  ];

  model:any={};

  addArticulo():void {
    this.Articulos.push(this.model);

  }

  deleteArticulo():void{

  }

  editArticulo():void{

  }
  updateAdticulo():void{

  }
}
