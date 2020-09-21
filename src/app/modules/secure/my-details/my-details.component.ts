import { Component, OnInit } from '@angular/core';
import { RestfulAPI } from '../../../providers/services/RestfulAPI.service';
import { SharingService } from '../../../providers/guards/sharing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

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
