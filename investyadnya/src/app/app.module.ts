import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderSectionComponent } from './slider-section/slider-section.component';
import { BrandStatsComponent } from './brand-stats/brand-stats.component';
import { HttpClientModule } from '@angular/common/http';
import { OfferingsComponent } from './components/offerings/offerings.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderSectionComponent,
    BrandStatsComponent,
    OfferingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
