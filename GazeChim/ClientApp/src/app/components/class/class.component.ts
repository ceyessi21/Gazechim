import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { ClassLabel } from '../interfaces.model';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit{

  @Output() selectedClass = new EventEmitter<string>();
  // @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  listClass !: ClassLabel[];
  selectedOption!: string;

  ngOnInit(): void {
    this.listClass = [{label: 'Classe I'},{label: 'Classe II'}, {label: 'Classe III'}, {label: 'Classe IV'}];
    this.selectedOption = this.listClass[0].label;
  }

  loadClass(event : any) : void {
    this.selectedClass.emit(this.selectedOption);
  }

  // getClasse(){
  //   const selectedIndex = this.tabGroup.selectedIndex;
  //   if (selectedIndex !== null) {
  //     const selectedTab = this.tabGroup._tabs.toArray()[selectedIndex];
  //     console.log("selectedTab.textLabel = ", selectedTab.textLabel);
  //     this.selectedClass.emit(selectedTab.textLabel);
  //   }
  // }
}
