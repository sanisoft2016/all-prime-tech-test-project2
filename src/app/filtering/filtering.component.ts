import { Component, OnInit } from '@angular/core';
import { Employee, employeesData } from './localData';
import { IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent } from 'igniteui-angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss'],
  standalone: true,
  imports: [IgxGridComponent, IgxCheckboxComponent, IgxColumnComponent, DatePipe]
})
export class FilteringComponent implements OnInit {
  public localData: Employee[] = [];
  title = 'filtering';

  ngOnInit(): void {
    this.localData = employeesData;
  }
}
