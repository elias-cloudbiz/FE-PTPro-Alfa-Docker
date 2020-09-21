import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebConfig } from '../../webconfig';

@Injectable()
export class RestfulAPI extends WebConfig {
    constructor(private http: HttpClient) { 
        super();
    }

    public prod = 'https://clustertwo.cloudinfo.biz/api/';
    public local = 'http://localhost:80/api-cluster/public/api/';
    public url =  this.env;
    public token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMzYzE0ZTVmYTc1ODlmMGU2ZTg2NDM5MzFhNTQwOWI1YzE4YzQwNzBhNTAzNGU1ODkxOGRkNmJjZjkzOGY1ZGQwMTAwYTViNmNmYWU4MGRiIn0.eyJhdWQiOiIxIiwianRpIjoiYzNjMTRlNWZhNzU4OWYwZTZlODY0MzkzMWE1NDA5YjVjMThjNDA3MGE1MDM0ZTU4OTE4ZGQ2YmNmOTM4ZjVkZDAxMDBhNWI2Y2ZhZTgwZGIiLCJpYXQiOjE1NDc2NTcxOTUsIm5iZiI6MTU0NzY1NzE5NSwiZXhwIjoxNTc5MTkzMTk1LCJzdWIiOiIiLCJzY29wZXMiOltdfQ.iBNFV9F6we3yLmbAK286SGu4t-etnsB-qb-jkA7v1G440MxYWrpvz3fT1aJq7i9fNKavQmLLv_Cnt3HaLN2B_rfB7yegIgqzt8_jt6wrCLDu9cF0qtGSeIIOVhPROwbRGqVrb1RokAQocTCEv7900Bs3HA0gEGrcKtoX9w8MLisqgPSTYJ9HgxRFM5GqsqAaiH5QOG1Zfx6MLZUHFxVQl7tQ0VwJnobBWnu7FZyPmI9Brf8kurtMomWQWqUx586XybJiASMJC6n_wZQc8JfFND9OJzUWJoCw-y0HZirnyYLUjHtER7ePByGfFAjBuNUBifcKtyFXrbG2ZUJHPmFNBpfat-a-KuBVAyU-Jje7zN9ibLzMZvXWej0Mmp0-BQVjjbrpmhsmIai7KgbaV970kgNty1maVGjDsvva3KLEBuk7QhbKCDrnh8Cfo8JH9RD2HrZMfX2uw6pr1kJ12UEZPncCoYsshniM4fI95pIJRV99pM9BpcPZron2BfGtrPCjaTkIuygzdCEDU7lt5UyCT9S6ri_-djMJ66TOvotxwsiHA37IJF3AP00LZgp2ccv0rXVVdd8Sl6UzxOhKgOcJPL4AwUM8Fl8KSzy3wRegt0m7DbgAymNf0ZYBcaBvbaTp-Tz7J-A6i9fDlNyTOQ1Ef_gNVgbxcj1EYzrIBa9UVlc';

    public get(_apiUrl, headertype, params?): Observable<any> {
        return this.http.get(`${this.url}` + _apiUrl, {headers: this.getHeaders(headertype), params});
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

}
