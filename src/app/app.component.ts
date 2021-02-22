//app.component.ts
import { Component, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { Checklist2Component } from './checklist2/checklist2.component';
import { ProfileComponent } from './profile/profile.component';

export interface UsersData {
  name: string;
  type: string;
  id: number;
  manager: string;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Desmond', type: 'Onboarding', manager: 'Alex'},
  {id: 1560608765432, name: 'Tim', type: 'Onboarding', manager: 'Alex'},
  {id: 1560665743574, name: 'Chen', type: 'Onboarding', manager: 'Alex'},
  {id: 1634525636326, name: 'Ali', type: 'Onboarding', manager: 'Alex'}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AppComponent {
  displayedColumns: string[] = ['id', 'name', 'progress','action'];
  //displayedColumns: string[] = ['id', 'name', 'progress','status','action'];
  dataSource = ELEMENT_DATA;
  

  @ViewChild(MatTable, { static: true })
  table!: MatTable<any>;
  title: any;

  constructor(public dialog: MatDialog) {}

  openDialog(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data:obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addRowData(result.data);
      }else if(result.event == 'Update'){
        this.updateRowData(result.data);
      }else if(result.event == 'Delete'){
        this.deleteRowData(result.data);
      }
    });
  }

  openDialog2(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(ChecklistComponent, {
      width: '500px',
      height: '500px',
      data:obj
    });

    /*dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'View'){
        this.addRowData(result.data);
      }
    });*/
  }

  openDialog3(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(Checklist2Component, {
      width: '500px',
      height: '500px',
      data:obj
    });

    /*dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'View'){
        this.addRowData(result.data);
      }
    });*/
  }

  openDialog4(action: any,obj: any) {
    obj.action = action;
    const dialogRef = this.dialog.open(ProfileComponent, {
      width: '500px',
      height: '500px',
      data:obj
    });

    /*dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'View'){
        this.addRowData(result.data);
      }
    });*/
  }

  addRowData(row_obj: { name: any; type: any; manager: any;}){
    var d = new Date();
    this.dataSource.push({
      id:d.getTime(),
      name:row_obj.name,
      type:row_obj.type,
      manager:row_obj.manager
    });
    this.table.renderRows();
    
  }
  updateRowData(row_obj: { id: number; name: string; }){
    this.dataSource = this.dataSource.filter((value,key)=>{
      if(value.id == row_obj.id){
        value.name = row_obj.name;
      }
      return true;
    });
  }
  deleteRowData(row_obj: { id: number; }){
    this.dataSource = this.dataSource.filter((value,key)=>{
      return value.id != row_obj.id;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
