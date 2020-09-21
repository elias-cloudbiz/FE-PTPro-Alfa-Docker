import { Component, OnInit, ViewChild, AfterViewChecked, Injectable } from '@angular/core';
import { RestfulAPI } from './RestfulAPI.service';
// @ts-ignore
import { WebConfig } from '../../webconfig'
import { Console } from 'console';

@Injectable()
export class SessionService extends WebConfig {


    public Session: any[] = [];
    public Data: any[] = [];
    public Fylke: any[] = [];
    public Cities: any[][] = [];
    public City: string = 'Endre by: ';
    public Region: string = 'Endre fylke: ';
    public GeoDeviceSupport:boolean = true;
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
        //console.log("Referer " + document.referrer);
        //Checking for existing identifier
        const appDevice = JSON.parse(localStorage.getItem('appDeviceId'));

        if (appDevice === null || ovveride == true) {

            const pos = this.getLocation();
            const clientIdentifier = this.randomId(6, 'clientID012345678');

            console.log("I am here" + clientIdentifier);

            pos.then(res => {

                this.Lat = res['coords'].latitude;
                this.Long = res['coords'].longitude;

                var data = { 'lat': this.Lat, 'long': this.Long, 'referrer': document.referrer, 'appDeviceId': clientIdentifier };
                this.postSession(data);

            }).catch(err => {
                console.log('Error IfnDef: ' + err);
                var data = { 'lat': this.Lat, 'long': this.Long, 'referrer': document.referrer, 'appDeviceId': clientIdentifier };
                this.postSession(data);
            });
        }
         else {
            this.getSessionData();
        } 
    }

    postSession(postClient) {

        this.API.post('session', postClient, 'public').subscribe(response => {



            this.Data = response['Data'];
            this.Fylke = this.Data.map(x => x.Fylke).filter((value, index, self) => self.indexOf(value) === index);

            this.GeoDeviceSupport = response['Support'];
            this.Identifier = response['Identifier'];
            this.City = response['City'];
            this.Region = response['Region'];
            this.ClientIdentifier = response['appDeviceId'];
            this.Lat = response['Lat'] = postClient['lat'];
            this.Long = response['Long'] = postClient['long'];

            localStorage.setItem('appDeviceId', JSON.stringify(response));
            console.log('Session Identifier exists ' + this.Identifier + "_" + this.ClientIdentifier);

            this.InitializeCities();
        });

    }

    getSessionData() {

        this.API.get('session','public').subscribe(response => {

            this.GeoDeviceSupport = response['Support'];
            this.Data = response['Data'];
            this.Fylke = this.Data.map(x => x.Fylke).filter((value, index, self) => self.indexOf(value) === index);

            //Checking for existing identifier
            var sessionData = JSON.parse(localStorage.getItem('appDeviceId'));

            this.Identifier = response['Identifier'];
            this.ClientIdentifier = sessionData['ClientIdentifier'];
            this.City = response['City'];
            this.Region = response['Region'];

            //console.log('Session Identifier exists ' + this.Identifier + "_" + this.ClientIdentifier);

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
