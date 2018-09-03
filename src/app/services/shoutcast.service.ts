import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShoutcastService {

  devId = 'Gos1bB1spBuj5Ssp&f&f';

  constructor(private http: HttpClient) {  }

  getPrimaryGenres() {
    //return this.http.get<GenrePrimary>('http://api.shoutcast.com/genre/primary?k=' + this.devId + '&f=json');
    //return this.http.get<User>('https://localhost:44300/api/user');
    return this.http.get<User>('http://userapi20180831023913.azurewebsites.net/api/user');
  }

}

interface User{
  "Name": { name };
}

interface GenrePrimary{
  "response": {
    "data": {
      "genrelist": {
        genre;
      }
    };
  };
}
