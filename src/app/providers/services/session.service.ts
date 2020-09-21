import { Component, OnInit, ViewChild, AfterViewChecked, Injectable } from '@angular/core';
import { RestfulAPI } from './RestfulAPI.service';
// @ts-ignore
import { WebConfig } from '../../webconfig'

@Injectable()
export class SessionService extends WebConfig {


    public Session: any[] = [];
    public Data: any[] = [];
    public Fylke: any[] = [];
    public Cities: any[][] = [];
    public City: string = 'Endre by: ';
    public Region: string = 'Endre fylke: ';
    public Identifier: string;
    public ClientIdentifier: string;
    private Lat = null;
    private Long = null;
    public loaded: boolean = false;

    constructor(public API: RestfulAPI) {
        super();
    }

    randomId(length, chars) {
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    async getLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    }


    initiateApp(ovveride = false) {
        console.log("Referer " + document.referrer);
        //Checking for existing identifier
        const sessionData = JSON.parse(localStorage.getItem('SessionData'));

        if (sessionData === null || ovveride == true) {

            const pos = this.getLocation();
            const clientIdentifier = this.randomId(6, 'clientID012345678');

            pos.then(res => {

                this.Lat = res['coords'].latitude;
                this.Long = res['coords'].longitude;

                var data = { 'lat': this.Lat, 'long': this.Long, 'referrer': document.referrer, 'appInitialID': clientIdentifier };
                this.initiateApplication(data);

            }).catch(err => {
                console.log('Error IfnDef: ' + err);
                var data = { 'lat': this.Lat, 'long': this.Long, 'referrer': document.referrer, 'appInitialID': clientIdentifier };
                this.initiateApplication(data);
            });


        }
        else {
            //Query server if ClientIdentifier == null
            var data = { 'lat': sessionData['Lat'], 'long': sessionData['Long'], 'referrer': document.referrer, 'appInitialID': sessionData['ClientIdentifier'] };
            //this.getSessionData(sessionData);
            this.initiateApplication(data);

        }

    }

    initiateApplication(data) {

        this.API.post('session', data, 'public').subscribe(response => {

            this.Data = response['Data'];
            this.Fylke = this.Data.map(x => x.Fylke).filter((value, index, self) => self.indexOf(value) === index);

            this.Identifier = response['Identifier'];
            this.City = response['City'];
            this.Region = response['Region'];
            this.ClientIdentifier = response['ClientIdentifier'];
            this.Lat = response['Lat'] = data['lat'];
            this.Long = response['Long'] = data['long'];

            localStorage.setItem('SessionData', JSON.stringify(response));
            console.log('Session Identifier exists ' + this.Identifier + "_" + this.ClientIdentifier);

            this.InitializeCities();

        });

    }

    getSessionData(sessionData) {

        this.API.get('session','public').subscribe(response => {

            this.Data = response['Data'];
            this.Fylke = this.Data.map(x => x.Fylke).filter((value, index, self) => self.indexOf(value) === index);

            //Checking for existing identifier
            var sessionData = JSON.parse(localStorage.getItem('SessionData'));

            this.Identifier = response['Identifier'];
            this.ClientIdentifier = sessionData['ClientIdentifier'];
            this.City = response['City'];
            this.Region = response['Region'];

            console.log('Session Identifier exists ' + this.Identifier + "_" + this.ClientIdentifier);

            this.InitializeCities();

        });

    }

    InitializeCities() {

        var x = {};

        this.Data.forEach((element, index) => {

            if (this.Cities[element.Fylke] == undefined)
                this.Cities[element.Fylke] = [element.City];
            else {
                var a = this.Cities[element.Fylke];
                a.push(element.City);
                this.Cities[element.Fylke] = a;
            }
        });

        this.loaded = true;

    }

}
