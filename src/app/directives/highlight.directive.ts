import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input()
  color: string = 'lightblue';

  constructor(private element: ElementRef) {
    console.log('En el constructor', this.color)
  }

  ngOnInit(): void {
    console.log('En el ngOnInit', this.color);
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(evento: MouseEvent) {
    this.resaltar(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.resaltar('');
  }

  private resaltar(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
