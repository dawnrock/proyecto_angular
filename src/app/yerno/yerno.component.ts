import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Props {
  nombre: string;
  onNuevoNombre: EventEmitter<string>
}

@Component({
  selector: 'app-yerno',
  templateUrl: './yerno.component.html',
  styleUrls: ['./yerno.component.scss']
})
export class YernoComponent implements OnInit, Props {

  @Input() nombre: string = '';
  @Output() onNuevoNombre: EventEmitter<string> = new EventEmitter();

  maxLenght: number = 9;

  constructor() { }

  ngOnInit(): void {
  }

  setNombre(e: Event) {
    let nuevoNombre = (e.target as HTMLInputElement).value;
    this.onNuevoNombre.emit(nuevoNombre);
  }

}
