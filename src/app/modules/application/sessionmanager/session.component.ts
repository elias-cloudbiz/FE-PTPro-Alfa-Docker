import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {SessionService} from '../../../providers/services/session.service';
import { RestfulAPI } from '../../../providers/services/RestfulAPI.service';

import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.css']
})
export class SessionComponent implements OnInit {

  constructor(public session:SessionService, private API:RestfulAPI) {

  }

  ngOnInit(){


  }


  setFylke(fylke: string) {

    this.session.Region = fylke;
    console.log(this.session.Cities);
  }

  setCity(city: string) {
    this.session.City = city;
    console.log(this.session.City);
  }

  postSessionData() {

    var vars = { 'location': { region: this.session.Region, city: this.session.City, identifier: this.session.Identifier, ClientIdentifier: this.session.ClientIdentifier } }

    this.API.post('session',vars,'public').subscribe(response => {
      console.log(vars);
      location.reload();
    });
  }



}
