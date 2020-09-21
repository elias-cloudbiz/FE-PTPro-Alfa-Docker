import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorsComponent implements OnInit, AfterViewChecked {
  routeParams;
  msg: string = "An error occured and should technician should be notified";

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    //this.msg = this.activatedRoute.snapshot.queryParams.error;
    this.routeParams = this.activatedRoute.snapshot.queryParams;
  }

  ngAfterViewChecked() {


      this.routeParams = this.activatedRoute.snapshot.queryParams;


  }
}
