import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChickenHomePageComponent } from './component/chicken-home-page/chicken-home-page.component';

const routes: Routes = [
  {path:'',component:ChickenHomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
