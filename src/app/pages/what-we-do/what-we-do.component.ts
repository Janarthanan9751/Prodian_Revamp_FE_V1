import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-what-we-do',
  standalone: true,
  imports: [],
  templateUrl: './what-we-do.component.html',
  styleUrl: './what-we-do.component.css'
})
export class WhatWeDoComponent {
      constructor(@Inject(PLATFORM_ID) private platformId: any,private router:Router) {}
    ngOnInit(): void {
      this.loadAos();
      
    }
  
    async loadAos(){
      if (isPlatformBrowser(this.platformId)) {
        const AOS = await import('aos'); 
        AOS.init({ duration: 800, once: true });
      }
    }

      navigateToDetailScreen(data:any){
    if(data =='Product'){
      this.router.navigate(['/productEngineering'])
    } else if(data == 'Digital'){
      this.router.navigate(['/digitalTransformation'])

    } else if(data == 'Analytics'){
      
      this.router.navigate(['/analytics'])
    }
  }

}
