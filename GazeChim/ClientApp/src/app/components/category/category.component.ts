import { Component, EventEmitter, Output, ViewChild, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { CategoryLabel } from '../interfaces.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent implements OnInit{

  @Output() selectedtCategory = new EventEmitter<string>();
  selectedOption!: string;
  listCategory !: CategoryLabel[];

  ngOnInit(): void {
    this.listCategory = [{label : 'A'}, {label : 'B'}, {label : 'C'}];
    this.selectedOption = this.listCategory[0].label;
  }

  @ViewChild('tabGroup') tabGroup!: MatTabGroup;

  loadCategory(event: any) : void{
    if (this.selectedOption !== null) {
      this.selectedtCategory.emit(this.selectedOption);
    }
  }

  // getValue() {
  //   const selectedIndex = this.tabGroup.selectedIndex;
  //   if (selectedIndex !== null) {
  //     const selectedTab = this.tabGroup._tabs.toArray()[selectedIndex];
  //     console.log("selectedTab.textLabel = ", selectedTab.textLabel);
  //     this.selectedtCategory.emit(selectedTab.textLabel);
  //   }
  // }

}
