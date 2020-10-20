import { Component, OnInit } from '@angular/core';
import { RestfulAPI } from '../../../providers/services/restfulAPI.service';
import { SharingService } from '../../../providers/auth-gaurds/user-sharing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-sellerpage',
  templateUrl: './my-sellerpage.component.html',
  styleUrls: ['./my-sellerpage.component.css']
})
export class MySellerPageComponent implements OnInit {

  constructor(private router: Router, private api: RestfulAPI, private uSharing: SharingService) { }

  ngOnInit() {
  }

  navigateMyProfile() {

    if (this.uSharing.memberType == 'Client') {
      this.router.navigate(['my/profile']);
    } else {
      this.router.navigate(['my/profile']);
    }
    
  }

}
