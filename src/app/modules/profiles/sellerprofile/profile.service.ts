// @ts-ignore
import { Injectable, ViewChild, Directive } from '@angular/core';
// @ts-ignore
import { ActivatedRoute } from '@angular/router';
// @ts-ignore
import { Location } from '@angular/common';
// @ts-ignore
import { RestfulAPI } from '../../../providers/services/RestfulAPI.service';
// @ts-ignore
import { ModalService } from '../../../providers/services/modal.service';
// @ts-ignore
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Directive()
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class ProfileService {

  PTProfile: any = {};
  PTProfileFields: any[] = [];
  PTHealthPlans: any[] = [];
  PTRating: any[] = [];
  PTQualification: any[] = [];
  PTActivityFields: any[] = [];
  PTReview: any[] = [];
  PTMerits: any[] = [];
  PTCalender: any[] = [];

  loading = true;
  init_ones = true;
  // @ts-ignore
  @ViewChild('profilesection') public scroll;

  constructor(private route: ActivatedRoute,
    private APIService: RestfulAPI,
    private location: Location,
    private modal: ModalService,
    private router: Router,
  ) { }

  refreshProfileByName(name) {
    this.APIService.get('pt/' + name, 'public').subscribe(res => {
      this.PTProfile = res['Profile'][0], this.PTProfileFields = res['ProfileFields'], this.PTQualification = res['Qualifications'],
        this.PTActivityFields = res['ActivityFields'], this.PTRating = res['Rating'], this.PTHealthPlans = res['Healthplans'],
        this.PTReview = res['Review'], this.PTRating = res['Rating'][0],
        this.loading = false, this.init_ones = true;


    });
    if (this.loading == false)
      this.scroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
    return name;
  }

  getProfileByName(name): void {

    // const idname = name.toLocaleLowerCase().replace(/\s/g, '.');
    this.APIService.get('pt/' + name, 'public').subscribe(res => {
      this.PTProfile = res['Profile'][0], this.PTProfileFields = res['ProfileFields'], this.PTQualification = res['Qualifications'],
        this.PTActivityFields = res['ActivityFields'], this.PTRating = res['Rating'], this.PTHealthPlans = res['Healthplans'],
        this.PTReview = res['Review'], this.PTRating = res['Rating'][0], this.PTMerits = res['Merits'],
        this.loading = false;
    });
  }

  getUrlName(): string {
    const id = this.route.snapshot.paramMap.get('name');
    //const idname = id.toLocaleLowerCase().replace(/\s/g, '.');
    return id
  }

  getUrlUserName(user): string {
    const convert = user.toLocaleLowerCase().replace(/\s/g, '.');
    return convert
  }

  convertBin2String(val): string {
    return (val == 0) ? 'Nei' : 'Ja';
  }

  planLength() {
    return this.PTHealthPlans.length;
  }

  reviewLength() {
    return this.PTReview.length
  }



  goBack(): void {
    this.location.back();
  }


  public AddToServiceCart(salesplan, name) {

    const t: any[] = JSON.parse(localStorage.getItem('HealthcartService'));

    if (!!localStorage.getItem('HealthcartService')) {
      salesplan.name = name;
      localStorage.setItem('HealthcartService', JSON.stringify(salesplan));
    } else {
      salesplan.name = name;
      localStorage.setItem('HealthcartService', JSON.stringify(salesplan));

    }

    this.router.navigate(['/helsetjenester']);

  }
  //  start crud Professional
  public createProfileField( profileData): Observable<any> {
   console.log('when add  data', this.PTProfileFields) 
    this.PTProfileFields.push(
      profileData
    );
    console.log('when add  data1', this.PTProfileFields) 
    return;
  }

  public editProfileField(data): void {
    this.PTProfileFields = this.PTProfileFields.map(item => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });
  }

  public deleteProfileField(field): void {
    this.PTProfileFields = this.PTProfileFields.filter(item => item.id !== field.id);
  }
  // end crud professional

  // start crud Qualification
  public createQualification( qualificationData): void {
    this.PTQualification.push(
      qualificationData
    );
    return;
  }

  public editQualification(data): void {
    console.log('service qualification data', this.PTQualification)
    this.PTQualification = this.PTQualification.map(item => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });
  }

  public deleteQualification(data): void {
    this.PTQualification = this.PTQualification.filter(item => item.id !== data.id);
    console.log(this.PTQualification)
  }
  //end crud qualification

  //  start crud Professional
  public createTraining( trainingData): void {
    console.log('traingdata', this.PTActivityFields);
    this.PTActivityFields.push(
      trainingData
    );
    return;
  }

  public editTraining(data): void {
    this.PTActivityFields = this.PTActivityFields.map(item => {
      if (item.id === data.id) {
        return data;
      } else {
        return item;
      }
    });
    console.log('service training data', this.PTActivityFields)
  }

  public deleteTraining(field): void {
    this.PTActivityFields = this.PTActivityFields.filter(item => item.id !== field.id);
  }
  // end crud professional
  
  //  start crud Achievement
    public createAchievement( achievementData): void {
      this.PTMerits.push(
        achievementData
      );
      return;
    }
  
    public editAchievement(data): void {
      this.PTMerits = this.PTMerits.map(item => {
        if (item.id === data.id) {
          return data;
        } else {
          return item;
        }
      });
    }
  
    public deleteAchievement(field):void {
      this.PTMerits = this.PTMerits.filter(item => item.id !== field.id);
    }
    // end crud Achievement

    //star crud plan
    public createPlan(data):void {
      this.PTHealthPlans.push (
        data
      );
      return;   
    }

    public editPlan(data):void {
      this.PTHealthPlans = this.PTHealthPlans.map(item =>{
          if(data.id == item.id) {
            return data;
          }else {
            return item;
          }
      });
    }

    public deletePlan(data):void {
      this.PTHealthPlans = this.PTHealthPlans.filter(item =>
        item.id !== data.id
      );
    }
    //end crud plan
}
