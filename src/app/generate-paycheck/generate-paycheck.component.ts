import { Chart } from 'chart.js';
import { Paycheck } from './../shared/paycheck.model';
import { PaycheckService } from './../shared/paycheck.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generate-paycheck',
  templateUrl: './generate-paycheck.component.html',
  styleUrls: ['./generate-paycheck.component.css']
})
export class GeneratePaycheckComponent implements OnInit {
  public paycheck: Paycheck;
  pieChart = [];
  constructor(
    private service: PaycheckService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.generatePaycheck();
  }

  generatePaycheck() {
    const empId = this.activatedRoute.snapshot.paramMap.get('empId');
    this.service.postPayCheck(empId).subscribe(resp => {
      if ((resp as Paycheck).txnId != null) {
        console.log(resp);
        this.toastr.success('Paycheck generated.', 'Employee App');
        this.paycheck = resp as Paycheck;
        this.generatePieChart();
      }
    });
  }

  generatePieChart() {
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Net Pay', 'Deductions', 'Taxes'],
        datasets: [
          {
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850'
            ],
            data: [
              this.paycheck.takeHomSalary,
              (
                this.paycheck.deduction401 +
                this.paycheck.deductionMedicare +
                this.paycheck.deductionDental
              ).toFixed(2),
              this.paycheck.federalTax
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Base $ ' + this.paycheck.baseSalary
        }
      }
    });
  }
}
