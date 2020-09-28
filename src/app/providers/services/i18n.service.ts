import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Console } from 'console';

@Injectable()
export class I18nService {


  data: any = {};
  languages: any = ['en', 'fr'];


  constructor(private http: HttpClient) {
    this.useLanguage();
  }
  
  useLanguage(lang: string = "en"): Promise<{}> {
    return new Promise<{}>((resolve, reject) => {
      const langPath = `static/i18n/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          this.data = Object.assign({}, translation || {});
          resolve(this.data);
        },
        error => {
          this.data = {};
          resolve(this.data);
        }
      );
    });
  }
}
