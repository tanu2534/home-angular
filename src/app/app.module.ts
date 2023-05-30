import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Sec1MidComponent } from './sec1-mid/sec1-mid.component';
import { Sec2Component } from './sec2/sec2.component';
import { Sec3Component } from './sec3/sec3.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { Sec4Component } from './sec4/sec4.component';
import { Sec5Component } from './sec5/sec5.component';
import { Sec6Component } from './sec6/sec6.component';
import { Sec7Component } from './sec7/sec7.component';
import { Sec8Component } from './sec8/sec8.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Sec1MidComponent,
    Sec2Component,
    Sec3Component,
    ScrollerComponent,
    Sec4Component,
    Sec5Component,
    Sec6Component,
    Sec7Component,
    Sec8Component,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
