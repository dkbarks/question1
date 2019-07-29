import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PersonalData } from '../model/personaldata';

@Injectable({
  providedIn: 'root'
})
export class SpringService {

  Url = 'http://localhost:8080/personal';

  constructor(private http: HttpClient) { }

  createPersonalData(personalData: PersonalData) {
      return this.http.post<PersonalData>(this.Url, personalData);
  }

}
