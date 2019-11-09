import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//importacion formsmodule para product.component.html//
import { RouterModule, Route} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//importe para pagos//
import {NgxStripeModule} from 'ngx-stripe';

//firebase//
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
//importamos de enviroments//
import{ environment } from "../environments/environment";
//componentes//

import { AppRoutingModule } from './components/app/app-routing.module';
import { AppComponent } from './components/app/app.component';
import { inicio } from './components/inicio/inicio.component';
import { limpiezahogar } from './components/limpiezahogar/limpiezahogar.component';
import { higienepersonal } from './components/higienepersonal/higienepersonal.component';
import { lacteos } from './components/lacteos/lacteos.component';
import { frutasyverduras } from './components/frutasyverduras/frutasyverduras.component';
import {bebidas} from './components/bebidas/bebidas.component';
import {itemsmascotas} from './components/itemsmascotas/itemsmascotas.component';
import { AdminComponent } from './components/admin/admin.component';
import { PaginaAdminComponent } from './components/pagina-admin/pagina-admin.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductListComponent } from './components/products/product-list/product-list.component';
import { ProductComponent } from './components/products/product/product.component';
//servicios//   
import { ProductService } from './services/product.service';
import { MapAdmiComponent } from './components/map-admi/map-admi.component';
import { PagosComponent } from './components/pagos/pagos.component';
//Vendedores//
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { VendedorComponent } from './components/vendedores/vendedor/vendedor.component';
import { VendedorListComponent } from './components/vendedores/vendedor-list/vendedor-list.component';
//servicios vendedores//
import{ VendedorService } from './servicesV/vendedor.service'

const routes: Route[] = [
  {path: '', component: inicio},
  {path: 'limpiezahogar', component: limpiezahogar},
  {path: 'higienepersonal', component: higienepersonal},
  {path: 'lacteos', component: lacteos},
  {path: 'frutasyverduras', component: frutasyverduras},
  {path: 'bebidas', component: bebidas},
  {path: 'itemsmascotas', component: itemsmascotas},
  {path: 'administradorelmasbonito123', component: AdminComponent},
  {path: 'pagina-admin' , component: PaginaAdminComponent},
  {path: 'products' , component: ProductsComponent},
  {path: 'map-admi', component: MapAdmiComponent},
  {path: 'pagos', component: PagosComponent},
  {path: 'vendedores', component: VendedoresComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    inicio,
    limpiezahogar,
    higienepersonal,
    lacteos,
    frutasyverduras,
    bebidas,
    itemsmascotas,
    AdminComponent,
    PaginaAdminComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent,
    MapAdmiComponent,
    PagosComponent,
    VendedoresComponent,
    VendedorComponent,
    VendedorListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, ReactiveFormsModule, FormsModule, NgxStripeModule.forRoot('pk_test_yGhHfbg8yH3mIiK49jhVOc9f001MpqFpqG'),
    RouterModule.forRoot(routes),
    //aca importamos firebase//
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    //importamos formsmodule de arriba para product.components.html//
    FormsModule
  ],
  providers: [
    ProductService,
    VendedorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
