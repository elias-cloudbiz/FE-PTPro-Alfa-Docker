import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';


@Component({
  selector: 'app-addModal',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TraininglAddComponent implements OnInit {
 
  trainingData;

  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<TraininglAddComponent>) {
  }


  ngOnInit() {
    this.trainingData = {
      id:'580',
      title: '',
      description: '',
      created_at: '',
      location: '',
      duration: '',
      intensity: '',
      choreography:'',
      endurance: '',
      strength: '',
      flexibility: '',
      balance: '',
    }
  }

  save() {
    console.log('curent data', this.trainingData)
    this.profile.createTraining(this.trainingData);
    this.close();
  }

  close() {
      this.dialogRef.close();
  }

}
