import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../shared/employees.service';
import { Employee } from '../shared/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  constructor(
    public service: EmployeesService,
    private activatedRoute: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee() {
    console.log('get Employee method');
    const empId = this.activatedRoute.snapshot.paramMap.get('empId');
    console.log(empId);
    console.log(typeof empId);
    this.service.getEmployee(empId);
  }

  onUpdate() {
    const empId = this.activatedRoute.snapshot.paramMap.get('empId');
    this.route.navigateByUrl('employee/edit/' + empId);
  }

  onGenerate() {
    console.log('onGenerate');
    const empId = this.activatedRoute.snapshot.paramMap.get('empId');
    this.route.navigateByUrl('paycheck/' + empId);
  }
}
