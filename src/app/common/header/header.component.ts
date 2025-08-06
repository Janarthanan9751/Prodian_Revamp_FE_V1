import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
     navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Who We Are', path: '/whoWeAre' },
    {
      label: 'What We Do',
      path: '/whatWeDo',
      children: ['/productEngineering', '/digitalTransformation', '/analytics'],
    },
    { label: 'Case Studies', path: '/caseStudy' },
    { label: 'Insights', path: '/insights' },
    // { label: 'Leadership', path: '/leadership' },
    { label: 'Smart Dev', path: '/smartDev' },
    { label: 'Contact', path: '/contact' },
  ];

  currentRoute = '';
  hoveredPath: string | null = null;

  @ViewChildren('link', { read: ElementRef }) linkRefs!: QueryList<ElementRef>;
  underlineWidth = 0;
  underlineTransform = 'translateX(0)';
  activeLinkElement: HTMLElement | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        setTimeout(() => this.updateUnderline(), 0);
      }
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.updateUnderline(), 100);
  }

  isActive(path: string): boolean {
    return this.currentRoute === path || this.currentRoute.startsWith(path + '/');
  }

  isParentActive(parentPath: string, children: string[]): boolean {
    return [parentPath, ...children].some((path) => this.currentRoute.startsWith(path));
  }

  updateUnderline() {
    const activeIndex = this.navItems.findIndex((item) =>
      this.isActive(item.path) || this.isParentActive(item.path, item.children || [])
    );

    const el = this.linkRefs.toArray()[activeIndex]?.nativeElement;
    if (el) {
      this.underlineWidth = el.offsetWidth;
      this.underlineTransform = `translateX(${el.offsetLeft}px)`;
      this.activeLinkElement = el;
    }
  }
}
