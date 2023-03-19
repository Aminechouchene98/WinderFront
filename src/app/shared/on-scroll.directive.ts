import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[winderOnScroll]',
})
export class OnScrollDirective {
  @Input() animation!: string;
  private animationShown = false;

  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(this.animation);
          entry.target.classList.remove('hidden');
          this.observer.unobserve(entry.target);
        }
      });
    });
  }

  ngOnInit() {
    this.observer.observe(this.el.nativeElement);
  }
}
