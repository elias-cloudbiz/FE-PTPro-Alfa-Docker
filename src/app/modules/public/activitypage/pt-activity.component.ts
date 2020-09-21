// @ts-ignore
import { Component, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
// @ts-ignore
import { RestfulAPI } from '../../../providers/services/RestfulAPI.service';

@Component({
  selector: 'app-pt-activity',
  templateUrl: './pt-activity.component.html',
  styleUrls: ['./pt-activity.component.css']
})
// @ts-ignore
export class PtActivityComponent implements OnInit, AfterViewChecked {

  loading = true;
  init_ones = true;

  // @ts-ignore
  @ViewChild('trainers') public scroll;

  PTByRegion: any[] = [];
  PTByCity: any[] = [];
  private Region: string;
  private City: string;

  constructor(private API: RestfulAPI) {


  }

  ngOnInit() {

    this.getHomeData();

  }


  getHomeData(): void {
    var SessionVars;


    this.API.get('activitypage', 'public').subscribe(response => {
      this.PTByRegion = response['State']['Data'].slice(0, 16),
        this.Region = response['State']['Name'],
        this.PTByCity = response['City']['Data'].slice(0, 16),
        this.City = response['City']['Name']

      this.loading = false;

    });

  }


  convert(name): string {

    const value = name.toLocaleLowerCase().replace(/\s/g, '.');
    return value;
  }

  ngAfterViewInit() {

  }

  ngAfterViewChecked() {
    if (this.loading == false && this.init_ones == true) {

      this.scroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'start' });
      this.init_ones = false;


    }



  }
}
