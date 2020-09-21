// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

// @ts-ignore
export class ContactsComponent implements OnInit {

  constructor(private profile:ProfileService) { 
    
  }

  ngOnInit() {
  }

}
