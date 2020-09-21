// @ts-ignore
import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

//import Professional
import { ProfessionalAddComponent} from './modal/add/professionalAddComponent/professional.component';
import { ProfessionalEditComponent } from './modal/edit/professionalEditComponent/professional.component';
//import Qualifications
import { QualificationAddComponent } from './modal/add/qualificationAddComponent/qualification.component';
import { QualificationEditComponent } from './modal/edit/qualificationEditComponent/qualification.component';
//import TrainingModal
import { TraininglAddComponent } from './modal/add/trainingAddComponent/training.component';
import { TrainingEditComponent } from './modal/edit/trainingEditComponent/training.component';
//import Achievements
import { AchievementsAddComponent } from './modal/add/achievementsAddComponent/achievements.component';
import { AchievementsEditComponent } from './modal/edit/achievementsEditComponent/achievements.component';

// @ts-ignore
import { ModalService } from '../../../../../providers/services/modal.service';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

// @ts-ignore
export class MainComponent implements OnInit {
  imageSrc:string;
  PTProfile: any[] = [];
  PTProfileFields: any[] = [];
  PTQualification: any[] = [];
  PTActivityFields: any[] = [];
  PTMerits: any[] = [];
  DeletData:any[] = [];
  editable: boolean;
  uPTProfile: any;

  constructor(private profile: ProfileService, private modalService: MatDialog) {
    this.PTProfile = this.profile.PTProfile;
    this.PTProfileFields = this.profile.PTProfileFields;
    this.PTQualification = this.profile.PTQualification;
    this.PTActivityFields = this.profile.PTActivityFields;
    this.PTMerits = this.profile.PTMerits;
    this.editable = false;
    this.uPTProfile = {};
  }

  ngOnInit() {

  }

  processFile(event): void {
    this.imageSrc = null;
    if (event.target.files && event.target.files[0]) {
      let file: any = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onload = e => {
        this.imageSrc = reader.result as string;
      }
      reader.readAsDataURL(file);
    }                                                                                                                                                                                                                                                                                                                          
  }

//edit general details
  editGeneralDetails(){
    this.editable = !this.editable;
    this.uPTProfile = {...this.PTProfile};
  }

  save(){
    this.editable = !this.editable;
    this.PTProfile = {...this.uPTProfile};
  }
// crud Professional start
  openProfessionalModal() {
    this.modalService.open(ProfessionalAddComponent);
  }

  editProfessionalModal(Field) {

    const modalRef = this.modalService.open(ProfessionalEditComponent);
    modalRef.componentInstance.content = Field;
    modalRef.componentInstance.onSave = this.onSave;
  }

  // showing changed data to professional from modal
  onSave = () => {
    this.PTProfileFields = this.profile.PTProfileFields;
  }

  deleteProfessional(Field){
    this.profile.deleteProfileField(Field);
    this.PTProfileFields = this.profile.PTProfileFields;
  }
// crud Professional end

// crud Qualification start
  addQualificationModal() {
    this.modalService.open(QualificationAddComponent);
  }

  editQualificationModa(Field) {
    const modalRef = this.modalService.open(QualificationEditComponent);
    modalRef.componentInstance.content = Field;
    modalRef.componentInstance.onSave = this.onSaveQualification;
  }

  onSaveQualification = () => {
    this.PTQualification = this.profile.PTQualification;
  }

  deleteQualification(Field){
    this.profile.deleteQualification(Field);
    this.PTQualification = this.profile.PTQualification;
  }
// crud Qualification end

//crud Training Activity start
  addTraining(){
    this.modalService.open(TraininglAddComponent);
  }
  editTraining(Field) {
    const modalRef = this.modalService.open(TrainingEditComponent);
    modalRef.componentInstance.content = Field;
    modalRef.componentInstance.onSave = this.onSaveTraining;
  }

  onSaveTraining = () => {
    this.PTActivityFields = this.profile.PTActivityFields;
  }

  deleteTraining(Field){
    this.profile.deleteTraining(Field);
    this.PTActivityFields = this.profile.PTActivityFields;
  }
//crud Training Activity end

// crud Achievements start
  addAchievements() {
    this.modalService.open(AchievementsAddComponent);
  }

  editAchievements(Merit) {
    const modalRef = this.modalService.open(AchievementsEditComponent);
    modalRef.componentInstance.content = Merit;
    modalRef.componentInstance.onSave = this.achievementsSave;
  }

  achievementsSave = () => {
    this.PTMerits = this.profile.PTMerits;
  }

  deleteAchievemens(Merit) {
    this.profile.deleteAchievement(Merit);
    this.PTMerits = this.profile.PTMerits;
  }

// crud Achievements end
}
