import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebConfig } from '../../webconfig';
import { map } from 'rxjs/operators';
import { RestfulAPI } from '../services/RestfulAPI.service';
import { SocketEcho } from '../services/SocketEcho.service';

import { SharingService } from '../guards/sharing.service';


@Injectable()
export class AuthService {

    private serviceloginURL = 'auth/login';
    private serviceregisterURL = 'auth/signup';
    constructor(private api: RestfulAPI, private account:SharingService, private echo:SocketEcho) { }

    public login(email: string, password: string) {

        // Check if JWT already present 
        return this.api.post(this.serviceloginURL, { email: email, password: password }, 'public').pipe(map(response => {
                if (response) {
                    localStorage.setItem('JWT', JSON.stringify(response));
                }
                return response;
            }));
    }

    public logout() {
        this.account.isUserLoggedIn.next(false);
        this.account.firstname = null;
        this.account.lastname = null;
        this.echo.CloseConnection('Notifications.User.' + this.account.uid);
        this.account.uid = null;
        this.account.memberType = null;
        localStorage.removeItem('JWT');
        this.api.get(`auth/logout`, `public`)
        return true;
    }

    public isAuthenticated(): boolean {
        let token = localStorage.getItem('JWT');
        if (token) {
            token = JSON.parse(token);
            if (Date.parse(token['expires_at']) >= Date.parse(new Date().toString())) {
                return true;
            } else {
                this.logout();
                return false;
            }
        } else {
            return false;
        }
    }

    public Token(): string {
        let token = localStorage.getItem('JWT');
        if (token) {
            token = JSON.parse(token);
            if (token['api_token']) {
                return token['api_token'];
            } else {
                this.logout();
                return "";
            }
        } else {
            this.logout();
            return "";
        }
    }

    public register(ruser: any) {
        return this.api.post(this.serviceregisterURL, ruser, 'public')
            .pipe(map(response => {
                if (response) {
                    // localStorage.setItem('JWT', JSON.stringify(response));
                }
                return response;
            }));
    }
}
