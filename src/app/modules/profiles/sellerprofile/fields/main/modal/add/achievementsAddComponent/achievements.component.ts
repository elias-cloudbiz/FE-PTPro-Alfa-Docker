import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';


@Component({
  selector: 'app-addModal',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css'],
})
export class AchievementsAddComponent implements OnInit {
 
  achievementsData;
  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<AchievementsAddComponent>) {
  }

  ngOnInit() {
    this.achievementsData = {

      id:'580',  
      title: '',
      description: '',
      year: '',
      month: '',
    }
  }

  save() {
    this.profile.createAchievement(this.achievementsData);
    this.close();
  }

  close() {
      this.dialogRef.close();
  }

}
