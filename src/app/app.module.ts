import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { ScreensComponent } from './screens/screens.component';
import { NationsComponent } from './nations/nations.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FooterComponent } from './footer/footer.component';
import { TopComponent } from './top/top.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    HomeComponent,
    RequirementsComponent,
    ScreensComponent,
    NationsComponent,
    VehiclesComponent,
    FooterComponent,
    TopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
