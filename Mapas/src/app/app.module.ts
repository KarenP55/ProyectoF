import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OsmViewComponent } from './app/osm-view/osm-view.component';
import { HelloComponent } from './app/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    OsmViewComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
