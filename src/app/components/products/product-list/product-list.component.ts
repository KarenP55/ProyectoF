import { Component, OnInit } from '@angular/core';
// conectarse con el servicio//
import { ProductService } from '../../../services/product.service';

//importar clase Product//
import{ Product } from '../../../models/product';
import { from } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProducts()
    .snapshotChanges()
    .subscribe(item => {
      this.productList = [];
      item.forEach(element => {
       let x = element.payload.toJSON();//se almacena en una variable//
       x["$key"]= element.key;
       this.productList.push(x as Product);
      });
    });
  }

}
