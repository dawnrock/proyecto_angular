import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  name = 'Carlos';
  constructor() {
    setTimeout( ()=> this.name ='Juan', 3000)
   }

  ngOnInit(): void {
  }

  setName(e: KeyboardEvent) {
    let input = e.target as HTMLInputElement;
    this.name = input.value;
  }

}
