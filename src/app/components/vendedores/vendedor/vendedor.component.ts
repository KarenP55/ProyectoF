import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
//servicioV //
import { VendedorService } from '../../../servicesV/vendedor.service';
//vendedor//
import { Vendedor } from '../../../modelsV/vendedor';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})
export class VendedorComponent implements OnInit {

  constructor(private vendedorService: VendedorService) { }

  ngOnInit() {
    this.vendedorService.getVendedores();
    this.resettForm();
  }

  onnSubmit( vendedorForm: NgForm )
  {
    if (vendedorForm.value.$key == null)
    this.vendedorService.insertVendedor(vendedorForm.value)
    else

    this.vendedorService.updateVendedor(vendedorForm.value);
    this.resettForm(vendedorForm);

  }

  resettForm(vendedorForm?: NgForm)
  {
    if(vendedorForm != null)
    vendedorForm.reset();
    this.vendedorService.selectedVendedor = new Vendedor();
  }

}