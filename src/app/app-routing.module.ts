import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoogleChartsComponent } from './google-charts/google-charts.component'
import {JointGraphComponent} from './joint-graph/joint-graph.component';

const routes: Routes = [
  { path: '**', component: JointGraphComponent },
  { path: 'joint-graph', component: JointGraphComponent },
  { path: 'google-chart', component: GoogleChartsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
