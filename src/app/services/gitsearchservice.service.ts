import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GitsearchserviceService {

  token = '3dcc9ffd5262cdd490a17070451618692b9ecc8c';

  constructor(private http: HttpClient) {  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getRepos(username: string): Observable<any> {

    const URI = 'https://api.github.com/search/repositories?q=user%3A' + username;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/vnd.github.v3+json');
    headers = headers.set('Authorization', 'token ' + this.token);

    return this.http.get(URI, {headers: headers} ).pipe(map(this.extractData));

  }

  getBranches(repo: string) {
    const URI = repo + '/branches';

    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    headers = headers.set('Accept', 'application/vnd.github.v3+json');
    headers = headers.set('Authorization', 'token ' + this.token);

    return this.http.get(URI, {headers: headers} ).pipe(map(this.extractData));
  }


}
