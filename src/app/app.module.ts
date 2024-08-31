import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChickenHeaderComponent } from './component/chicken-header/chicken-header.component';
import { ChickenFooterComponent } from './component/chicken-footer/chicken-footer.component';
import { ChickenHomePageComponent } from './component/chicken-home-page/chicken-home-page.component';
import { ChikenMenuComponent } from './component/chiken-menu/chiken-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ChickenHeaderComponent,
    ChickenFooterComponent,
    ChickenHomePageComponent,
    ChikenMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
