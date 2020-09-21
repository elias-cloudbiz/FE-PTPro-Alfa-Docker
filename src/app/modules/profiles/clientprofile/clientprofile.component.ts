// @ts-ignore
import { Component, OnInit, ViewChild } from '@angular/core';
// @ts-ignore
import { SharingService } from '../../../providers/guards/sharing.service';
// @ts-ignore
import { Router, ActivatedRoute } from '@angular/router';
// @ts-ignore
import { SessionService } from '../../../providers/services/session.service';


@Component({
  selector: 'app-clientprofile',
  templateUrl: './clientprofile.component.html',
  styleUrls: ['./clientprofile.component.css']
})
// @ts-ignore
export class ClientprofileComponent implements OnInit {

  // @ts-ignore
  @ViewChild('profilesection') public scroll;

  public Tab: number = 0;
  public Name = '';
  public memberType = 'Client';



  constructor(private route: ActivatedRoute,private router: Router, private uSharing: SharingService, public session: SessionService) {
    this.Name = uSharing.firstname + ' ' + uSharing.lastname;
    this.memberType = uSharing.memberType;
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {

  }



  ngOnInit(): void {
  /*     const name = this.route.snapshot.paramMap.get('name');
      this.profile.getProfileByName(name);   */
  }

}
