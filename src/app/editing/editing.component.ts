import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';
import { IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent } from 'igniteui-angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editing',
  templateUrl: './editing.component.html',
  styleUrls: ['./editing.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, DatePipe]
})
export class EditingComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'editing';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
