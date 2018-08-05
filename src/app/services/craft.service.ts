import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CraftService {
  private urlMainPage = environment.apiUrl + "crafts/home-page/";

  constructor(private http: Http) { }

  getMainPageCrafts(pageNum = 1) {
    return this.http.get(this.urlMainPage + pageNum);
  }

}
