import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberEntity } from '../model/member-entity';

@Injectable({
  providedIn: 'root'
})

export class MembersService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<MemberEntity[]> {
    return this.http.get<MemberEntity[]>('https://api.github.com/orgs/lemoncode/members');
  }

  // return fetch('https://api.github.com/orgs/lemoncode/members')
  // .then((response) => response.json());
  //

}
