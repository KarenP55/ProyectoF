import { Injectable } from '@angular/core';
//importamos a firebase//
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database'; //crea una lista de los datos que se tenga de angular//
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  //al usar Angularfiredatabase permite utilizar los metodos de firebase en esta clase
  selectedProduct: Product = new Product();
  //selectedproduccc almacena el dato temporalmente//
  constructor(private firebase: AngularFireDatabase) { }

  getProducts(){
    return this.productList=this.firebase.list('products');
  }
  insertProduct(product:Product)//tipo clase producto//
  {
//insertar a la base de datos//
this.productList.push({
  name: product.name,
  category: product.category,
  location: product.location,
  price: product.price
});
}
//dentro los parentesis se pasa el producto//
updateProduct(product:Product)
{
  this.productList.update(product.$key, {
    name: product.name,
    category: product.category,
    location: product.location,
    price: product.price
  });
}

deleteProduct($key:string)
{
this.productList.remove($key);
}
}
