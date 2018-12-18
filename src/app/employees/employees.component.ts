import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  constructor(public service: EmployeesService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    console.log('method called');
    let response = this.service.getEmployees();
    console.log(response);
  }
}
