import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [NgIf],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.css'
})
export class CaseStudyComponent {
  showMoreTechContent :string='';
  hideMoreTechCOntent:string = '';

  showMoreTech(data:any){
    this.showMoreTechContent = data;

  }
  hideMoreTech(data:any){
    this.hideMoreTechCOntent = data;
  }

}
