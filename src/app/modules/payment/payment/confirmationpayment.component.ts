import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-confirmationpayment',
  templateUrl: './confirmationpayment.component.html',
  styleUrls: ['./confirmationpayment.component.css']
})
export class ConfirmationpaymentComponent implements OnInit {

  ServiceCart:ServiceCartInterface;
  


  constructor(private _location: Location, private renderer: Renderer2) {


  }

  ngOnInit() {

    var temp = JSON.parse(localStorage.getItem('HealthcartService'));

    try {
      if (temp != null) {
     
        this.ServiceCart = temp;
        this.clearItems();

      }



    } catch (error) {

    }



  }

  backReturn() {
    this._location.back();
  }

  clearItems() {
    localStorage.removeItem("HealthcartService");
  }

  gotoMyPage(){
    //TODO
  }


}
export interface ServiceCartInterface {
  name: any;
}