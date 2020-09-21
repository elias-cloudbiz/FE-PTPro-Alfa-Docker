// @ts-ignore
import { PagingService } from '../../../providers/services/pagination.service';


export class SearchProperties {

  public PTSearch_Initial: any[] = [];
  public PTSearch_ResultFiltered: any[]; 
  public HPSearch_Initial: any[] = [];
  public HPSearch_ResultFiltered: any[];

  public PTPager: any = {}; 
  public PTPagerItems: any[];
  public HPPager: any = {};
  public HPPagerItems: any = [];


  public PTData: any[] = [];
  public PTHealthplan: any[] = [];

  public cityIndex = 'All';

  public PTFilter_Cities = [];
  public PTFilter_Qualifications = [];
  public PTFilter_Center = [];
  public PTFilter_Popularity = ['All', 'High', 'Middle'];
  public PTFilter_Experience = ['All', 'Above 8 years', '4-8 years', '1-4 years', 'Upto 12 months'];
  public PTFilter_Education = ['All','Yes', 'No'];
  public PTFilter_Gender = ['All','Male', 'Female'];
  public PTFilter_GroupTr = ['All', 'Yes', 'No'];
  public PTFilter_Positiontype = ['All','Part time', 'Full time'];
  public PTFilter_Meetup = ['All','On agreement', 'Fixed time'];

  public HPFilter_Type = ['All','Personally tailored plan', 'Complete plan and guidance'];
  public HPFilter_Typeplan = ['All', 'Activity or guidance', 'Diatary and guidance', 'Combi plans'];
  public HPFilter_Healthcategory = ['All','Weight loss', 'Muscle terapy'];
  public HPFilter_Popularitet = ['All', 'High', 'Average'];
  public HPFilter_Height_range = [];
  public HPFilter_Age_range = [];
  public HPFilter_Weight_range = [];
  public HPFilter_Price_range = [];


  constructor() {

  }


  dataSize() {
    return this.PTData.length;
  }


  Bind_PTFilter_Qualificitons() {
    this.PTFilter_Qualifications = this.PTSearch_ResultFiltered.map(x => x.qualifications);
    var Q = [];
    this.PTFilter_Qualifications.forEach(element => {
      element.forEach(q => {
        Q.push(q);
      });
    });

    this.PTFilter_Qualifications = Q.filter((value, index, self) => self.indexOf(value) === index);
    this.PTFilter_Qualifications.unshift('Alle');
    this.cityIndex = 'Alle';
  }


  Bind_PTFilter_City() {

    this.PTFilter_Cities = this.PTData.map(x => x.city).filter((value, index, self) => self.indexOf(value) === index);
    this.PTFilter_Cities.unshift('Alle');
    this.cityIndex = 'Alle';
  }

  Bind_PTFilter_Center() {
    this.PTFilter_Center = this.PTData.map(x => x.club).filter((value, index, self) => self.indexOf(value) === index);
    this.PTFilter_Center.unshift('Alle');
    this.cityIndex = 'Alle';
  }



}
