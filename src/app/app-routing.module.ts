import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScouterVillageComponent } from './scouter-village/scouter-village.component';
import { ScoutsLandComponent } from './scouts-land/scouts-land.component';

const routes: Routes = [
  { path: 'scouters', component: ScouterVillageComponent },
  { path: 'scouts', component: ScoutsLandComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
