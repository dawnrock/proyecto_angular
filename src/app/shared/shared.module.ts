import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../directives/highlight.directive';
import { SearchByLoginPipe } from './search-by-login.pipe';



@NgModule({
  declarations: [HighlightDirective, SearchByLoginPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    SearchByLoginPipe
  ]
})
export class SharedModule { }
