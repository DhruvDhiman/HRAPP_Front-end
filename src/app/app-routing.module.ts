import { UpdateFormComponent } from './update-form/update-form.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { PaychecksComponent } from './paychecks/paychecks.component';
import { GeneratePaycheckComponent } from './generate-paycheck/generate-paycheck.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent },
  { path: 'employee/:empId', component: EmployeeComponent },
  { path: 'paychecks', component: PaychecksComponent },
  { path: 'employee', component: EmployeeFormComponent },
  { path: 'employee/edit/:empId', component: UpdateFormComponent },
  { path: 'paycheck/:empId', component: GeneratePaycheckComponent },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
