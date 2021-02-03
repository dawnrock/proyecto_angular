import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suegra',
  templateUrl: './suegra.component.html',
  styleUrls: ['./suegra.component.scss']
})
export class SuegraComponent implements OnInit {
  nombre: string = "Carlos";
  constructor() { }

  ngOnInit(): void {
  }

  setNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }
}
