import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css'],
})
export class QualificationAddComponent implements OnInit {
 
  qualificationData;

  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<QualificationAddComponent>) {
  }

  ngOnInit() {
    this.qualificationData = {
      id:'580',
      title: '',
      description: ''
    }
  }

  save() {
    this.profile.createQualification(this.qualificationData);
    this.close();
  }

  close() {
      this.dialogRef.close();
  }
}
