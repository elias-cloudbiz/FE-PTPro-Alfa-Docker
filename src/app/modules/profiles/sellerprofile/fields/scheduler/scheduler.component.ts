// @ts-ignore
import { Component, OnInit } from '@angular/core';
// @ts-ignore
import { FormControl } from '@angular/forms';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css']
})

// @ts-ignore
export class SchedulerComponent {

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  Weekdays: any[] = [];
  PTCalender: any[] = [];

  constructor(private profile: ProfileService) {
    this.refreshWeekdays();
    this.PTCalender = this.profile.PTCalender;


  }

  getDate(): string {
    return new Date().toISOString();
  }

  getWeekday(day) {
    // Copy date so don't modify original
    var d = new Date()


    switch (day) {
      case 1: { return "Mandag" }
      case 2: { return "Tirsdag" }
      case 3: { return "Onsdag" }
      case 4: { return "Torsdag" }
      case 5: { return "Fredag" }
      case 6: { return "Lørdag" }
      case 7: { return "Søndag" }
    }
    // return d.getUTCDay();
  }


  refreshWeekdays() {
    var d = new Date();
    switch (d.getUTCDay()) {
      case 1: { this.Weekdays = [1, 2, 3, 4, 5, 6, 7]; break; }
      case 2: { this.Weekdays = [2, 3, 4, 5, 6, 7, 1]; break; }
      case 3: { this.Weekdays = [3, 4, 5, 6, 7, 1, 2]; break; }
      case 4: { this.Weekdays = [4, 5, 6, 7, 1, 2, 3]; break; }
      case 5: { this.Weekdays = [5, 6, 7, 1, 2, 3, 4]; break; }
      case 6: { this.Weekdays = [6, 7, 1, 2, 3, 4, 5]; break; }
      case 7: { this.Weekdays = [7, 1, 2, 3, 4, 5, 6]; break; }
    }
  }

  getDay(val) {

    return this.getWeekday(this.Weekdays[val]);
  }


}
