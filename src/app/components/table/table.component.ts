import {Component, OnInit} from '@angular/core';
import {Table} from "primeng/table";
import {FormControl, Validators} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {FilterService} from "primeng/api";
import {CurrencyService} from "../../services/currency.service";
import {RateInterface} from "../../interfaces/currency.interface";
import {catchError} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [DatePipe]
})
export class TableComponent implements OnInit {

  loading: boolean = true;
  rates: RateInterface[] = [];
  defaultDate: Date = new Date();
  maxDate: Date = new Date('2022-07-12')
  filteredDate: string | null = '';
  error: boolean = false;
  errorMess: any = null;

  constructor(private service: CurrencyService,
              private filterService: FilterService,
              private datePipe: DatePipe) {
    this.filteredDate = this.datePipe.transform(this.defaultDate, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getElements();
  }

  getElements() {
    this.service.getNumbers().subscribe((resp) => {
      this.rates = [];
      this.rates = resp[0].rates;
      this.loading = false;
    });
  }

  onChange(newValue: string | null) {
    this.filteredDate = this.datePipe.transform(newValue, 'yyyy-MM-dd');
    if (this.filteredDate !== null && this.filteredDate !== '') {
      this.service.getByDate(this.filteredDate)
        .subscribe((response) => {
            console.log('1', this.filteredDate);
            console.log('2', response);
            this.rates = [];
            this.rates = response[0].rates;
          },
          error => {
            this.rates = [];
            console.log(error.message);
          })
    }
  }

  clear(table: Table) {
    table.clear();
  }
}
