import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingEditComponent implements OnInit {

  content: any;
  onSave: any;


  trainingData;
  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<TrainingEditComponent> ) { }

  ngOnInit() {
    this.trainingData = {
      id             : this.content['id'],
      title          : this.content['title'],
      description    : this.content['description'],
      created_at     : this.content['created_at'],
      location       : this.content['location'],
      duration       : this.content['duration'],
      intensity      : this.content['intensity'],
      choreography   : this.content['choreography'],
      endurance      : this.content['endurance'],
      strength       : this.content['strength'],
      flexibility    : this.content['flexibility'],
      balance        : this.content['balance'],
    }
  }

  save() {
    this.profile.editTraining(this.trainingData);

    console.log('expected is date', this.trainingData.start_datetime)
    this.close();
    this.onSave();
  }

  close() {
      this.dialogRef.close();
  }

}
