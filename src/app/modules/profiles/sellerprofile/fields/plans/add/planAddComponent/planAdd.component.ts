import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './planAdd.component.html',
  styleUrls: ['./planAdd.component.css'],
})
export class PlanAddComponent implements OnInit {
 
  planData;  

  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<PlanAddComponent>) {
  }


  ngOnInit() {
    this.planData = {
      id:'836',
      age: '',
      allergies: '',
      calories: '',
      created_at: '',
      description: '',
      follow_up: '',
      follow_up_data: '',
      gender: '',
      health_category: '',
      height: '',
      itemType: '',
      price: '',
      ptid: '',
      rating: '',
      title: '',
      type: '',
      type_plan: '',
      updated_at: '',
      vegetar: '',
      weight:''
    }
  }

  save() {
    this.profile.createPlan(this.planData);
    this.close();
  }

  close() {
      this.dialogRef.close();
  }

}
