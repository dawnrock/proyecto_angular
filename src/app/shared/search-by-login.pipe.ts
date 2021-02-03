import { Pipe, PipeTransform } from '@angular/core';
import { MemberEntity } from '../model/member-entity';

@Pipe({
  name: 'searchByLogin',
})
export class SearchByLoginPipe implements PipeTransform {

  transform(members: MemberEntity[], searchValue: string): MemberEntity[] {
    return members.filter (
      member => member.login.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

}
