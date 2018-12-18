import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paycheck } from './paycheck.model';

@Injectable({
  providedIn: 'root'
})
export class PaycheckService {
  readonly BASE_URL =
    'https://app20181218124249.azurewebsites.net/api/employees/paycheks';

  payCheck: Paycheck;
  payCheckList: Paycheck[];
  constructor(private http: HttpClient) {}

  getAllPayCheck() {
    this.http
      .get(this.BASE_URL)
      .toPromise()
      .then(resp => {
        console.log(resp);
        this.payCheckList = resp as Paycheck[];
      });
  }

  postPayCheck(empId: string) {
    let requestURL = this.BASE_URL + '/' + empId;
    return this.http.post(requestURL, {});
  }
}
