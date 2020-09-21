import { Component, OnInit } from '@angular/core';
// import { ModalService } from '../../../../../../providers/services/modal.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './planEdit.component.html',
  styleUrls: ['./planEdit.component.css']
})
export class PlanEditComponent implements OnInit {

  content: any;
  onSave: any;
  planData;

  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<PlanEditComponent> ) { }

  ngOnInit() {
    this.planData = {
      id              : this.content['id'],
      age             : this.content['age'],
      allergies       : this.content['allergies'],
      calories        : this.content['calories'],
      created_at      : this.content['created_at'],
      description     : this.content['description'],
      follow_up       : this.content['follow_up'],
      follow_up_data  : this.content['follow_up_data'],
      gender          : this.content['gender'],
      health_category : this.content['health_category'],
      height          : this.content['height'],
      itemType        : this.content['itemType'],
      price           : this.content['price'],
      ptid            : this.content['ptid'],
      rating          : this.content['rating'],
      title           : this.content['title'],
      type            : this.content['type'],
      type_plan       : this.content['type_plan'],
      updated_at      : this.content['updated_at'],
      vegetar         : this.content['vegetar'],
      weight          :this.content['weight']
    }
  }

  save() {
    this.profile.editPlan(this.planData);
    this.close();
    this.onSave();
  }

  close() {
      this.dialogRef.close();
  }

}
