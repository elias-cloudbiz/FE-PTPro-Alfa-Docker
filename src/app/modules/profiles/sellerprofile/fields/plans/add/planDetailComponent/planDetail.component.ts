import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './planDetail.component.html',
  styleUrls: ['./planDetail.component.css'],
})
export class PlanDetailComponent implements OnInit {
 
  planData;
  content: any;  

  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<PlanDetailComponent>) {
  }


  ngOnInit() {
    this.planData = {
      id: this.content['id'],
      description: this.content['description'],
    }
  }

  close() {
      this.dialogRef.close();
  }

}
