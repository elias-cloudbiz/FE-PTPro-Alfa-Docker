import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RestfulAPI } from '../services/RestfulAPI.service';

@Injectable()
export class SharingService {
    public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    public uid = null;
    public firstname = null;
    public lastname = null;
    public memberType = 'Client';

    constructor(private api: RestfulAPI) {
        this.firstname = null;
        this.lastname = null;
        this.getLoginDetails();

    }

    public getLoginDetails() {

        this.isUserLoggedIn.subscribe((data) => {

            if (data && this.firstname == null && this.lastname == null) {
                this.api.get('mydetails', 'secure').subscribe(response => {

                    this.firstname = response.firstname;
                    this.lastname = response.lastname;
                    this.memberType = response.memberType;
                    this.uid = response.id;


                });
            }
        });
    }


}
