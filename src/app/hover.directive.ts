import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef,HostListener,Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{
 @Input() appHover:string="yellow";
//  @Input() color:string="yellow";

  constructor(private element:ElementRef, private renderer:Renderer2) {
    console.log(this.element.nativeElement);
    
   }

  ngOnInit():void{
// this.element.nativeElement.style.backgroundColor = this.color;
this.renderer.setStyle(
  this.element.nativeElement,
  'backgroundColor',
  this.appHover
);

  }

  @HostListener('mouseenter')onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'yellow'
    );
  }

  @HostListener('mouseleave')onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }
}
