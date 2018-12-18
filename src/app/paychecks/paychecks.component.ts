import { Component, OnInit } from '@angular/core';
import { PaycheckService } from '../shared/paycheck.service';

@Component({
  selector: 'app-paychecks',
  templateUrl: './paychecks.component.html',
  styleUrls: ['./paychecks.component.css']
})
export class PaychecksComponent implements OnInit {
  constructor(public service: PaycheckService) {}

  ngOnInit() {
    this.getPaychecks();
  }

  getPaychecks() {
    console.log('inside getpaycheck comp');
    this.service.getAllPayCheck();
  }
}
