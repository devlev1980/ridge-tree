import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ITree} from './models/tree';

@Injectable()
export class RigdeTreeService {
  apiUrl: string = './assets/demo-tree.json';

  constructor(private http: HttpClient) {
  }

  getTree(): Observable<ITree> {
    return this.http.get<ITree>(this.apiUrl);
  }
}
