// @ts-ignore
import { Component, OnInit, ViewChild } from '@angular/core';
import {ProfileService} from '../../profile.service';
import { PlanAddComponent } from './add/planAddComponent/planAdd.component';
import { MatDialog } from "@angular/material/dialog";
import { PlanEditComponent } from './edit/planEditComponent/planEdit.component';
import { PlanDetailComponent } from './add/planDetailComponent/planDetail.component';
@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})

// @ts-ignore
export class PlansComponent implements OnInit {



  public PTHealthPlans:any[] = [];
  public PTName: string;
  
  constructor(private profile:ProfileService, private modalService: MatDialog) { 
    this.PTHealthPlans = this.profile.PTHealthPlans;
    this.PTName = this.profile.PTProfile.name; 
  }

  

  ngOnInit() {

  }

  openPlansModal() {
    console.log('plan data', this.PTHealthPlans);
    this.modalService.open(PlanAddComponent);
  }

  editPlansModal(Field) {
       const modalRef = this.modalService.open(PlanEditComponent);
       modalRef.componentInstance.content = Field;
       modalRef.componentInstance.onSave = this.planSave;
  }

  planSave = () => {
    this.PTHealthPlans = this.profile.PTHealthPlans;
  }

  deletePlans(Field) {
    this.profile.deletePlan(Field);
    this.PTHealthPlans = this.profile.PTHealthPlans;

  }

  openPlanDetail(Field) {
    const modalRef = this.modalService.open(PlanDetailComponent);
    modalRef.componentInstance.content = Field;
  }

 

}
