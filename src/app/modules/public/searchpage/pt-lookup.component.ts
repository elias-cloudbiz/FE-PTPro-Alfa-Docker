// @ts-ignore
import { Component, OnInit, AfterViewInit, ViewChild, AfterViewChecked } from '@angular/core';
// @ts-ignore
import { RestfulAPI } from '../../../providers/services/RestfulAPI.service';
// @ts-ignore
import { PagingService } from '../../../providers/services/pagination.service';
import { SearchProperties } from './SearchProperties';


@Component({
  selector: 'app-pt-lookup',
  templateUrl: './pt-lookup.component.html',
  styleUrls: ['./pt-lookup.component.css']
})
// @ts-ignore
export class PTLookupComponent extends SearchProperties implements OnInit, AfterViewChecked {


  loading = true;
  init_ones = true;
  City: string;
  NCity: String;
  Region: String;


  private PTSearch: any;
// @ts-ignore
  @ViewChild('controller') public scroll;

  constructor(private API: RestfulAPI, private pagerService: PagingService) {
    super();
  }



  ngOnInit() {

    this.getSearchData();

  }
  ngAfterViewInit() {

  }


  ngAfterViewChecked() {
    if (this.loading == false && this.init_ones == true) {
      this.scroll.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
      this.init_ones = false;
    }
  }

  getUrlUserName(user): string {
    const convert = user.toLocaleLowerCase().replace(/\s/g, '.');
    return convert
  }


  convert(name): string {

    const value = name.toLocaleLowerCase().replace(/\s/g, '.');
    return value;
  }

  getSearchData(): void {

    this.API.get('searchpage','public').subscribe(response => {
      this.PTData = response['PT'];
      this.PTHealthplan = response['Healthplan'];

      this.Initialize_PTSearch();
      this.Initialize_HPSearch();

      this.loading = false;
    });


  }

  PTdataSize() {
    return this.PTData.length;
  }

  HPdataSize() {
    return this.PTHealthplan.length;
  }

  replaceFylke(val) {

    return val.replace('Fylke', '');
  }

  convertBin2String(val): string {
    return (val == 0) ? 'Nei' : 'Ja';
  }

  public Initialize_HPSearch() {
    this.HPSearch_Initial = this.PTHealthplan;
    this.HPSearch_ResultFiltered = this.HPSearch_Initial;

    this.HP_InitializePager(1);
    this.Bind_HPSearch();
  }

  public Initialize_PTSearch() {
    this.PTSearch_Initial = this.PTData;
    this.PTSearch_ResultFiltered = this.PTSearch_Initial;
    this.PT_InitializePager(1);
    this.Bind_PTSearch();

  }

  public Bind_HPSearch() {
    //No yet bindings

  }

  public Bind_PTSearch() {
    this.Bind_PTFilter_City();
    this.Bind_PTFilter_Qualificitons();
    this.Bind_PTFilter_Center();
  }

  public HP_InitializePager(page: number) {
    this.HPPager = this.pagerService.getPager(this.HPSearch_ResultFiltered.length, page);
    this.HPPagerItems = this.HPSearch_ResultFiltered.slice(this.HPPager.startIndex, this.HPPager.endIndex + 1);
  }


  public PT_InitializePager(page: number) {
    this.PTPager = this.pagerService.getPager(this.PTSearch_ResultFiltered.length, page);
    this.PTPagerItems = this.PTSearch_ResultFiltered.slice(this.PTPager.startIndex, this.PTPager.endIndex + 1);
  }


  nameContainer = [];
  qualificationToggle = false;
  toggleByName(type: string) {

    if (this.nameContainer.length === 0 && type !== 'Alle') {
      this.nameContainer[type] = 1;
      this.qualificationToggle = true;
    }

    else {
      this.nameContainer[type] = 0;
      this.qualificationToggle = false;
    }




  }

  private containerActive = [];
  selectedIndexArr: any[] = [];
  toggleActive(index: number, type: string) {

    if (index !== 0) {
      this.selectedIndexArr[type] = index;
    }

    if (index === 0) {
      this.containerActive[type] = false;
    }
    else {
      this.containerActive[type] = true;
    }
  }

  public PTSearch_Filter(data, ddltype) {
    if (ddltype === 'club') {

      if (data === 'Alle') {
        this.PTSearch_ResultFiltered = this.PTData;
      } else {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial.filter(x => x.club === data);
      }
    }
    if (ddltype === 'Gender') {
      if (data === 'Alle') {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial;
      } else {
        this.PTSearch_ResultFiltered = this.PTSearch_ResultFiltered.filter(x => x.gender === data);
      }
    }
    if (ddltype === 'Qualifications') {
      if (data === 'Alle') {
        this.PTSearch_ResultFiltered = this.PTData;
        this.nameContainer = [];
        this.qualificationToggle = false;
        this.Bind_PTSearch();
      } else {

        var N = [];
        this.PTSearch_ResultFiltered.forEach((item, index) => {
          var t = item['qualifications'].indexOf(data);
          if (t !== -1) {
            N.push(item);
          }
        });
        this.PTSearch_ResultFiltered = N;
        this.Bind_PTSearch();
      }

    }
    if (ddltype === 'City') {
      if (data === 'Alle') {
        this.PTSearch_ResultFiltered = this.PTData;
      } else {
        this.PTSearch_ResultFiltered = this.PTSearch_ResultFiltered.filter(x => x.city === data);
        console.log(this.PTSearch_ResultFiltered);
      }


    }
    this.PT_InitializePager(1);
  }

  public HPSearch_Filter(data, ddltype) {
    if (ddltype === 'danger') {
      if (data === 'All') {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial;
      } else {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial.filter(x => x.danger.toString() === data);
      }
    }
    if (ddltype === 'gender') {
      if (data === 'All') {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial;
      } else {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial.filter(x => x.gender === data);
      }
    }
    if (ddltype === 'qualifications') {
      if (data === 'Alle') {
        this.PTSearch_ResultFiltered = this.PTSearch_Initial;
      } else {

        var N = [];
        this.PTSearch_Initial.forEach((item, index) => {
          var t = item['qualifications'].indexOf(data);
          if (t !== -1) {
            N.push(item);
          }
        });
        this.PTSearch_Initial = this.PTSearch_ResultFiltered = N;
        this.Bind_PTSearch();

      }

    }
    if (ddltype === 'city') {
      if (data === 'Alle') {
        this.PTSearch_Initial = this.PTSearch_ResultFiltered = this.PTData;
        this.Initialize_PTSearch();

      } else {

        this.PTSearch_ResultFiltered = this.PTSearch_Initial.filter(x => x.city === data);

      }


    }
    this.HP_InitializePager(1);
  }


}
