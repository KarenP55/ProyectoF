import { Component, OnInit } from '@angular/core';

//conectar con el servicio//
import { VendedorService } from '../../../servicesV/vendedor.service'
import { Vendedor } from '../../../modelsV/vendedor';
import { element } from 'protractor';

@Component({
  selector: 'app-vendedor-list',
  templateUrl: './vendedor-list.component.html',
  styleUrls: ['./vendedor-list.component.css']
})
export class VendedorListComponent implements OnInit {

  vendedorList: Vendedor[];

  constructor(
    private vendedorService: VendedorService
  ) { }

  ngOnInit() {
    this.vendedorService.getVendedores()
    .snapshotChanges()
    .subscribe(item => {
      this.vendedorList = [];
      item.forEach(element=> {
        let y = element.payload.toJSON();
        y["$key"] = element.key;
        this.vendedorList.push(y as Vendedor);
      });

    });
  }

  onEdit(vendedor:Vendedor){
    this.vendedorService.selectedVendedor = Object.assign({},vendedor);

  }
  onDelete($key : string){
    this.vendedorService.deleteVendedor($key);

  }
}
