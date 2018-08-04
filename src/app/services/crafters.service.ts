import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CraftersService {
  private urlPopularCrafters = environment.apiUrl + "crafters/popular";

  constructor(private http: Http) { }

  getPopularCrafters(pageNum = 1) {
    return this.http.get(this.urlPopularCrafters + pageNum);
  }
}
