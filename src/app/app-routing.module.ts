import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { EventsComponent } from './component/events/events.component';
import { HomeComponent } from './component/home/home.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { TrainersComponent } from './component/trainers/trainers.component';

const routes: Routes = [
   {path:"", component:HomeComponent},
   {path:"home", component:HomeComponent},
   {path:"about" , component:AboutComponent},
   {path:"courses", component:CoursesComponent},
   {path:"trainers", component:TrainersComponent},
   {path:"events", component:EventsComponent},
   {path:"pricing",component:PricingComponent},
   {path:"contact",component:ContactComponent}

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
