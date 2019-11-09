import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
//importamos el NgForm de este ts//

//service
import{ ProductService } from '../../../services/product.service';
   
//product class
import{ Product } from '../../../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService : ProductService) { }

  ngOnInit() {
    //inicialeizar arrego de onsubmit//
    this.productService.getProducts();//tratara de traer los datos de fire base//
    this.resetForm();
  }

  onSubmit(productForm: NgForm)
  {
    this.productService.insertProduct(productForm.value);
    this.resetForm(productForm);
  }

//crear funcion de resetear de product.components.html//
resetForm(productForm?: NgForm)// el ? hace que sea opcional//   
{
if (productForm != null)
 productForm.reset();
 this.productService.selectedProduct = new Product();
}
}
