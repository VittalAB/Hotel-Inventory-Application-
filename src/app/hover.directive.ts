import { Directive,ElementRef,OnInit,Inject, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  @Input() color: string = 'red';


  constructor(private ele : ElementRef, private ren : Renderer2) { 
    this.ele.nativeElement.style.backgroundColor = this.color;
  }
  
  
  ngOnInit(): void {
      this.ren.setStyle(this.ele.nativeElement, 'backgroundColor', this.color);
  }
  

  @HostListener('mouseenter') onMouseEnter(){
    this.ren.setStyle(this.ele.nativeElement, 'backgroundColor', 'tomato');
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.ren.setStyle(this.ele.nativeElement, 'backgroundColor', 'green');
  }

}
