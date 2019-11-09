import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {StripeService, Elements, Element as StripeElement, ElementsOptions} from 'ngx-stripe';
import { element } from 'protractor';


@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent implements OnInit {

  elements: Elements;
  card: StripeElement;
  elementsOptions: ElementsOptions = {
    locale: 'es'
  };

  stripeTest: FormGroup;

  constructor(private fb: FormBuilder, private StripeSvc: StripeService) { }

  ngOnInit() {
    this.stripeTest = this.fb.group({
     name: ['', Validators.required]
    });

    this.StripeSvc.elements(this.elementsOptions).subscribe( elements => {
      this.elements = elements;
      if (!this.card) {
        this.card = this.elements.create('card', {
          style: {
            base: {
            iconColor: '#666ee8',
            color: '#31325f',
            lineHeight: '40px',
            fontWeight: 300,
            fontSize: '20px'
            }
          }
        });
        this.card.mount('#card-element');
      }
    });
  }

  buy() {
    const name = this.stripeTest.get('name').value;
    this.StripeSvc.createToken(this.card, {name}).subscribe(
      result => {
        if (result.token) {
          console.log('Token', result.token);
        } else if (result.error) {
          console.log('Errorsito', result.error.message);
        }
      });
  }
}
