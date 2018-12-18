import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';
import { Employee } from '../shared/employee.model';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  constructor(
    public service: EmployeesService,
    private activeRoute: ActivatedRoute,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getEmployee();
  }

  getEmployee(): void {
    const empId = this.activeRoute.snapshot.paramMap.get('empId');
    this.service.getEmployee(empId);
  }

  onSubmit(form: NgForm) {
    this.updateRecord(form);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.service.employee = {
      empId: '',
      firstName: '',
      lastName: '',
      emailId: '',
      location: '',
      baseSalary: 0,
      deduction401: 0,
      deductionMedicare: 0,
      deductionDental: 0
    };
  }
  updateRecord(form: NgForm) {
    this.service
      .putEmployee(form.value, this.service.employee.empId)
      .subscribe(res => {
        if (res.status == 204) {
          this.toastr.success('Updated successfully', 'Employee App');
          this.resetForm(form);
          this.service.getEmployees();
          this.route.navigateByUrl('/employees');
        }
      });
  }
}
