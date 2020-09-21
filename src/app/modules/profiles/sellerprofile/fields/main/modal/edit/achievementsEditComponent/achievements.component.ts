import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsEditComponent implements OnInit {

  content: any;
  onSave: any;


  achievementsData;
  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<AchievementsEditComponent>) { }

  ngOnInit() {
    this.achievementsData = {
      id             : this.content['id'],
      title          : this.content['title'],
      description    : this.content['description'],
      month          : this.content['month'],
      year           : this.content['year'],
    }
  }

  save() {
    this.profile.editAchievement(this.achievementsData);
    this.close();
    this.onSave();
  }

  close() {
      this.dialogRef.close();
  }

}
