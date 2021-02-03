import { R3ResolvedDependencyType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MemberEntity } from 'src/app/model/member-entity';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  members: MemberEntity[] = [];
  newMember : MemberEntity;
  searchValue: string = '';

  constructor(service : MembersService) {

    service.getAll().subscribe(
      data => this.members = data
    );


    this.newMember = {
      id: '',
      avatar_url: '',
      login: ''
    }
   }

  ngOnInit(): void {
  }

  add() {
    this.members = [...this.members];
    this.members.push(this.newMember);
    this.newMember = {
      id: '',
      avatar_url: '',
      login: ''
    };
  }

}
