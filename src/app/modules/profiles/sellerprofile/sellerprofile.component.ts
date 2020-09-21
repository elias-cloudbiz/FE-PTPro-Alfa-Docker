// @ts-ignore
import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
// @ts-ignore
import { ActivatedRoute, Router } from '@angular/router';
// @ts-ignore
import { SharingService } from '../../../providers/guards/sharing.service';

import { ProfileService } from './profile.service';



@Component({
  selector: 'app-pt-detail',
  templateUrl: './sellerprofile.component.html',
  styleUrls: ['./sellerprofile.component.css']
})

// @ts-ignore
export class ProfileDetailComponent implements OnInit, AfterViewInit, AfterViewChecked {

  // @ts-ignore
  @ViewChild('profilesection') public scroll;

  private Tab: number = 0;


  constructor(private route: ActivatedRoute,private router: Router,  public profile: ProfileService, private uSharing: SharingService) {
    this.profile.loading = true;
  }

  ngAfterViewInit() {
  }

  ngAfterViewChecked() {
    if (this.profile.loading == false && this.profile.init_ones == true) {
      //this.profile.scroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
      this.profile.init_ones = false;
    }
  }

  activeClass(i: number) {
    if (i === this.Tab)
      return 'active';
    else
      return '';
  }

  private switch(tab: number) {
    switch (tab) {
      case 0:
        this.Tab = tab;
        break;

      case 1:
        this.Tab = tab;
        break;

      case 2:
        this.Tab = tab;
        break;

      case 3:
        this.Tab = tab;
        break;

      case 4:
        this.Tab = tab;
        break;

      case 5:
        this.Tab = tab;
        break;

      default:
        this.Tab = 0;
        break;
    }
  }


  ngOnInit(): void {
      const name = this.route.snapshot.paramMap.get('name');
      this.profile.getProfileByName(name);
  }

  getQualifiedUser() {
    /*
        this.route.params.subscribe(
          params => {

          }); */
  }

  /*
  save(): void {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
    */
}
