import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-landing',
  standalone: true,
  imports: [],
  templateUrl: './home-landing.component.html',
  styleUrl: './home-landing.component.css'
})
export class HomeLandingComponent {
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
