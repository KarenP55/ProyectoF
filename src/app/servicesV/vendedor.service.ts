import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//importe para insertarVendedores//
import { Vendedor } from '../modelsV/vendedor';

@Injectable({
  providedIn: 'root'
})
export class VendedorService {

  vendedorList: AngularFireList<any>;
  
  selectedVendedor: Vendedor = new Vendedor ();
  
  constructor(private firebase: AngularFireDatabase) { }

  getVendedores()
  {
  return this.vendedorList = this.firebase.list('vendedores');
  }
  
  insertVendedor(vendedor: Vendedor)
  {
    this.vendedorList.push({
      name: vendedor.name,
      apellido: vendedor.apellido,
      celular: vendedor.celular,
      correo: vendedor.correo,
      zona: vendedor.zona,
      contrasena: vendedor.contrasena
    });
  }

  updateVendedor(vendedor: Vendedor)
  {
    this.vendedorList.update(vendedor.$key, {
      name: vendedor.name,
      apellido: vendedor.apellido,
      celular: vendedor.celular,
      correo: vendedor.correo,
      zona: vendedor.zona,
      contrasena: vendedor.contrasena
    });
  }
  deleteVendedor($key: string)
  {
    this.vendedorList.remove($key);
  }
}
