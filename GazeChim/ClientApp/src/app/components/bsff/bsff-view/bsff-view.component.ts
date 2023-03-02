import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Bsff } from 'src/app/models/bsff/bsff';
import { BsffCollectionType } from 'src/app/models/bsff/bsff-collection';
import { Bsffs } from 'src/app/models/bsff/bsffs';
import { Edges } from 'src/app/models/bsff/edges';
// import { BsffService } from 'src/app/services/bsff.service';

@Component({
  selector: 'app-bsff-view',
  templateUrl: './bsff-view.component.html',
  styleUrls: ['./bsff-view.component.scss'],
})
export class BsffViewComponent {
  // bsffs!: Edges[];
  // constructor(private bsffService: BsffService) {}

  // async getBsffs(): Promise<void> {
  //   var bsffs = await firstValueFrom(this.bsffService.getAll());
  //   this.bsffs = bsffs.bsffs.edges;
  // }

  // async getBsffById(id: string): Promise<void> {
  //   var bsff = await firstValueFrom(this.bsffService.getById(id));
  //   console.log(bsff);
  // }
}
