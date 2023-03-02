import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsffViewComponent } from './bsff-view/bsff-view.component';
import { RouterModule, Routes } from '@angular/router';
import { BsffViewDetailsComponent } from './bsff-view-details/bsff-view-details.component';

const routes: Routes = [
  {
    path: '',
    component: BsffViewComponent,
    children: [{ path: ':id', component: BsffViewDetailsComponent }],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BsffRoutingModule {}
