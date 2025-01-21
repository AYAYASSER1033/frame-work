import { Component,HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  
})
export class NavComponent {

  checkScrolling: boolean = false;
  @HostListener('document:scroll')
  scrollFunction(): void {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0)
      this.checkScrolling = true;
    else this.checkScrolling = false;
  }
}
