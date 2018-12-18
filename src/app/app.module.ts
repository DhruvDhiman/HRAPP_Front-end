import { PaycheckService } from './shared/paycheck.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NavbarComponent } from './navbar/navbar.component';

import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './shared/employees.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeComponent } from './employee/employee.component';
import { GeneratePaycheckComponent } from './generate-paycheck/generate-paycheck.component';
import { PaychecksComponent } from './paychecks/paychecks.component';
import { UpdateFormComponent } from './update-form/update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    EmployeesComponent,
    EmployeeFormComponent,
    EmployeeComponent,
    GeneratePaycheckComponent,
    PaychecksComponent,
    UpdateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartsModule,
    ToastrModule.forRoot()
  ],
  providers: [EmployeesService, PaycheckService],
  bootstrap: [AppComponent]
})
export class AppModule {}
