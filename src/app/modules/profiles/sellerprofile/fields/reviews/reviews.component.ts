// @ts-ignore
import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
// @ts-ignore
export class ReviewsComponent implements OnInit {

  PTRating: any[] = [];
  PTReview: any[] = [];

  



  constructor(private profile: ProfileService) {
    this.PTRating = this.profile.PTRating;
    this.PTReview = this.profile.PTReview;

  }

  ngOnInit() {
  }

  validate(sum, val): boolean {

    if ((sum % 1) > 0.5 && sum - 1 < val && val < sum)
      return true
    else
      return false;
  }

}
