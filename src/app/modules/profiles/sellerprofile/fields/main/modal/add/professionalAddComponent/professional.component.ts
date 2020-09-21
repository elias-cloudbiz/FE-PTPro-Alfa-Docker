import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { ProfileService } from '../../../../../profile.service';

@Component({
  selector: 'app-addModal',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.css'],
})
export class ProfessionalAddComponent implements OnInit {
 
  profileData;
  imageSrc: string;

  constructor( private profile: ProfileService, private dialogRef: MatDialogRef<ProfessionalAddComponent>) {
  }

  processFile(event): void {
    if (event.target.files && event.target.files[0]) {
        let file: any = event.target.files[0];
        const reader: FileReader = new FileReader();
        reader.onload = e => {
          this.imageSrc = reader.result as string;
        }
        reader.readAsDataURL(file);
    }                                                                                                                                                                                                                                                                                                                                               
  }

  ngOnInit() {
    this.profileData = {
      id:'580',
      ptid:'193',
      created_at:'2019-10-21 00-00-00',
      title: '',
      description: '',
      image: '',
      link: '',
      datefield_from: '',
      datefield_to: '',
      updated_at:'',
    }
  }

  save() {
    this.profile.createProfileField(this.profileData);
    this.close();
  }

  close() {
      this.dialogRef.close();
  }

}
