import {Component, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from "@angular/forms";
import {UIRent} from "../interfaces/rent";

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {

  rentForm: FormGroup;
  @ViewChild('createForm') createForm: FormGroupDirective | undefined;

  constructor() {
    const defaultDate = new Date();

    this.rentForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
      dni: new FormControl(''),
      address: new FormControl(''),
      reservationDate: new FormControl(defaultDate.toISOString()),
      type: new FormControl(''),
      size: new FormControl(''),
      model: new FormControl(''),
      color: new FormControl(''),
      shirt: new FormControl(false),
      tie: new FormControl(false),
      vest: new FormControl(false),
      price: new FormControl(''),
      advancePayment: new FormControl(''),
      balance: new FormControl(''),
      notes: new FormControl(''),
      fittingDate: new FormControl(defaultDate.toISOString()),
      deliveryDate: new FormControl(defaultDate.toISOString()),
      returnDate: new FormControl(defaultDate.toISOString()),
    });
  }


  suitSizes: number[] = [
    40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62
  ]

  suitColors: string[] = [
    'Gris', 'Gris topo', 'Negro', 'Azul francia', 'Azul oscuro', 'Blanco', 'Violeta'
  ]


  createRent(value: UIRent) {

    console.log("Rent from UI", value);

  }

  submitForm() {
    // @ts-ignore
    this.createForm.onSubmit(this.rentForm);

  }
}
