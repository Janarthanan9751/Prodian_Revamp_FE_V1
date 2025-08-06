import { RouterModule, Routes } from '@angular/router';
import { HomeLandingComponent } from './pages/home-landing/home-landing.component';
import { WhatWeDoComponent } from './pages/what-we-do/what-we-do.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';
import { ProductEngineeringComponent } from './pages/product-engineering/product-engineering.component';
import { DigitalTransformationComponent } from './pages/digital-transformation/digital-transformation.component';
import { AnalyticAiComponent } from './pages/analytic-ai/analytic-ai.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
      { path: '', component: HomeLandingComponent },
       { path: 'home', component: HomeLandingComponent },
      {path:'whatWeDo',component:WhatWeDoComponent},
      {path:'insights',component:InsightsComponent},
      {path:'whoWeAre',component:WhoWeAreComponent},
      {path:'caseStudy',component:CaseStudyComponent},
      {path:'productEngineering',component:ProductEngineeringComponent},
      {path:'digitalTransformation',component:DigitalTransformationComponent},
      {path:'analytics',component:AnalyticAiComponent},
];

@NgModule({
      imports: [
            RouterModule.forRoot(routes, {
                  scrollPositionRestoration: 'enabled',
                  anchorScrolling: 'enabled',
                  scrollOffset: [0, 0] // Optional: top-left corner
            })
      ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

