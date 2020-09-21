import { Component, OnInit } from '@angular/core';
// import { ModalService } from '../../../../../../providers/services/modal.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css']
})
export class ProfessionalEditComponent implements OnInit {

  content: any;
  onSave: any;
  imageSrc:string;


  profileData;
  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<ProfessionalEditComponent> ) { }

  ngOnInit() {
    this.profileData = {
      id             : this.content['id'],
      ptid           : this.content['ptid'],
      created_at     : this.content['created_at'],
      title          : this.content['title'],
      description    : this.content['description'],
      image          : this.content['image'],
      link           : this.content['link'],
      datefield_from : this.content['datefield_from'],
      datefield_to   : this.content['datefield_to'],
      updated_at     : this.content['updated_at'],
    }
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

  save() {
    this.profile.editProfileField(this.profileData);
    this.close();
    this.onSave();
  }

  close() {
      this.dialogRef.close();
  }

}
