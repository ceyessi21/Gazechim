import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsffViewComponent } from './bsff-view/bsff-view.component';
import { SharedModule } from 'src/app/common/shared.module';
import { BsffViewDetailsComponent } from './bsff-view-details/bsff-view-details.component';
import { BsffRoutingModule } from './bsff-routing.module';

@NgModule({
  declarations: [BsffViewComponent, BsffViewDetailsComponent],
  imports: [CommonModule, SharedModule, BsffRoutingModule],
})
export class BsffModule {}
