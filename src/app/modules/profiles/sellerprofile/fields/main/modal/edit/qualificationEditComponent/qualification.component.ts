import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationEditComponent implements OnInit {

  content: any;
  onSave: any;
  qualificationData;
  
  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<QualificationEditComponent> ) { }

  ngOnInit() {
    this.qualificationData = {
      id             : this.content['id'],
      title          : this.content['title'],
      description    : this.content['description'],
    }
  }

  save() {
    this.profile.editQualification(this.qualificationData);
    this.close();
    this.onSave();
  }

  close() {
      this.dialogRef.close();
  }

}
