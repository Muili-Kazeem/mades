import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class HoverDirective {
  cardPositTop!: any
  windowHeight!: any
  revealPoint = 400;

  constructor(
    private ele: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.addClass(this.ele.nativeElement, "reveal");
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeClass(this.ele.nativeElement, "reveal");
  }

  @HostListener("document:scroll") onScroll() {
    this.cardPositTop = this.ele.nativeElement.getBoundingClientRect().top;
    this.windowHeight = window.innerHeight;

    if (this.cardPositTop < -20) {
      this.renderer.removeClass(this.ele.nativeElement, "slide")
    }
    if (this.cardPositTop < (this.windowHeight - this.revealPoint)) {
      this.renderer.addClass(this.ele.nativeElement, "slide")
    }
    if (this.cardPositTop > this.windowHeight) {
      this.renderer.removeClass(this.ele.nativeElement, "slide")
    }
  }

}
