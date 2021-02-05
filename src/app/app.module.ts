import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleChartsComponent } from './google-charts/google-charts.component';
import { AppleChartsComponent } from './apple-charts/apple-charts.component';
import { YandexChartsComponent } from './yandex-charts/yandex-charts.component';
import { MicrosoftChartsComponent } from './microsoft-charts/microsoft-charts.component';
import { JointGraphComponent } from './joint-graph/joint-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GoogleChartsComponent,
    AppleChartsComponent,
    YandexChartsComponent,
    MicrosoftChartsComponent,
    JointGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
