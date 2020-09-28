import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RestfulAPI } from '../../../providers/services/restfulAPI.service';
import { SharingService } from '../../../providers/auth-gaurds/user-sharing.service';
import { Router } from '@angular/router';
// @ts-ignore
import { Events } from '../../communication/messenger/services/events.service';


@Component({
  selector: 'app-healthcart',
  templateUrl: './salescart.component.html',
  styleUrls: ['./salescart.component.css']
})
export class salesCartComponent implements OnInit {

  content = [];
  tblshow = false;
  CartEmpty = true;
  ServiceCart = [];

  constructor(private _location: Location, private api: RestfulAPI, private router: Router, private events: Events, public account: SharingService) {

  }

  ngOnInit() {
    var temp = JSON.parse(localStorage.getItem('HealthcartService'));

    try {
      if (temp != null)
        this.CartEmpty = false;

      this.ServiceCart = temp;
    } catch (error) {

    }


  }

  postConfirmRequest() {

    if (this.account.memberType === 'Seller') {
      window.alert('Sellers cant order consulations');
      this.backReturn();
      return;
    }

    var data = { 'type': 0, 'data': [this.ServiceCart] }

    this.api.post('communication', data, 'secure').subscribe(response => {

      var token = response.url;
      this.router.navigate([`/mypayvalidation/${token}`]);

      if (response['data'] == false)
        return;

      this.events.messenger.newContact(response, false);

      console.log('Request confirmation', response)


    });
  }

  backReturn() {
    this._location.back();
  }

  clearItems() {
    this.CartEmpty = true;
    localStorage.removeItem("HealthcartService");
    this.ServiceCart = null;
  }



}
