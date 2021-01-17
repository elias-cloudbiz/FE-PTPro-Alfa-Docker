import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { WebConfig } from '../../webconfig';

@Injectable()
export class RestfulAPI extends WebConfig {
    constructor(private http: HttpClient) { 
        super();
    }

    public prod = 'https://clustertwo.cloudinfo.biz/api/';
    public local = 'http://localhost:80/api-cluster/public/api/';
    public url =  this.env;
    public token = '';

    public get(_apiUrl, headertype, params?): Observable<any> {
        return this.http.get(`${this.url}` + _apiUrl, {headers: this.getHeaders(headertype), params}).pipe(catchError(this.handleError));
    }
    public post(_apiUrl, item: any, headertype): Observable<any> {
        return this.http.post(`${this.url}` + _apiUrl, item, {headers: this.getHeaders(headertype)});
    }
    public put(_apiUrl, itemId: number, item: any, headertype): Observable<any> {
        return this.http.put(`${this.url}` + _apiUrl + itemId, item, {headers: this.getHeaders(headertype)});
    }
    public patch(_apiUrl, item: any, headertype): Observable<any> {
        return this.http.patch(`${this.url}` + _apiUrl, item, {headers: this.getHeaders(headertype)});
    }

    public delete(_apiUrl, item: any, headertype): Observable<any> {
        return this.http.delete(`${this.url}` + _apiUrl + '/' + item, {headers: this.getHeaders(headertype)});
    }

    public getHeaders(type) {
        if (type === 'public') {
            return this.getPublicHttpHeaders();
        }
        if (type === 'secure') {
            return this.getAuthHttpHeaders();
        }
    }

    public getAuthHttpHeaders(): HttpHeaders {
        const user = localStorage.getItem('JWT');
        if (!!user) {
            const temp = JSON.parse(user);
            const token = temp['api_token'];
            return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + token, 'Identifier': '0000' });
        }
    }

    public getPublicHttpHeaders(): HttpHeaders {
        return new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8', 'Authorization': 'Bearer ' + this.token });
    }
    handleError(error: HttpErrorResponse) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
      }
}
