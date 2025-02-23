import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const navbar = this.el.nativeElement.querySelector('#navbar-top');
    if (scrollPosition > 100) {
      if (navbar) {
        this.renderer.removeClass(navbar, 'navbar-transparent');
        this.renderer.addClass(navbar, 'bg-danger');
      }
    } else {
      if (navbar) {
        this.renderer.addClass(navbar, 'navbar-transparent');
        this.renderer.removeClass(navbar, 'bg-danger');
      }
    }
  }
}
