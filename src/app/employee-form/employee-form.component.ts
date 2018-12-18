import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/employees.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Employee } from '../shared/employee.model';
//import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  constructor(
    public service: EmployeesService,
    private toastr: ToastrService,
    private route: Router
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  /**
   * to reset the form to default value on init
   * @param form NgForm
   */
  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
    }
    this.service.formData = {
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

  /**
   * call insertRecord method to send POST request
   * @param form NgForm
   */
  onSubmit(form: NgForm) {
    this.insertRecord(form);
  }

  /**
   * Sends form data to service method
   * @param form NgForm
   */
  insertRecord(form: NgForm) {
    this.service.postEmployee(form.value).subscribe(res => {
      if ((res as Employee).empId != null) {
        this.toastr.success('Added Successfully!', 'Employee App');
        this.resetForm(form);
        this.service.getEmployees();
        this.route.navigateByUrl('/employees');
      }
    });
  }
}
