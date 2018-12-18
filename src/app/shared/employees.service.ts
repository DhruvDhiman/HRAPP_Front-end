import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  readonly BASE_URL =
    'https://app20181218124249.azurewebsites.net/api/employees';

  employee: Employee;
  employeeList: Employee[];
  formData: Employee;

  constructor(private http: HttpClient) {}

  /**
   * Get all employees
   */
  getEmployees() {
    this.http
      .get(this.BASE_URL)
      .toPromise()
      .then(resp => {
        console.log(resp);
        this.employeeList = resp as Employee[];
      });
  }

  getEmployee(empdId: string) {
    const requestUrl = `${this.BASE_URL}/${empdId}`;
    return this.http
      .get(requestUrl)
      .toPromise()
      .then(resp => {
        console.log('Employee fetched:' + resp);
        this.employee = resp as Employee;
      });
  }
  postEmployee(formData: Employee) {
    return this.http.post(this.BASE_URL, formData);
  }

  putEmployee(employee: Employee, empId: string) {
    const requestUrl = `${this.BASE_URL}/${empId}`;
    console.log('Request URL putEmployee :' + requestUrl);
    return this.http.put(requestUrl, employee, { observe: 'response' });
  }
}
