import { Component,AfterViewInit,ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddBookingComponent } from './add-booking/add-booking.component';

export interface bookingInfo{
  booking_id:string;
  customer_name:string;
  customer_id:string;
  booking_type:number;
  booking_date:any;
  booking_time:string;
  mobile:string;
  status:number;
  booking_source:number;
  paid_status:number;
  paid_date:any;
  created_on_date:any;
  created_on_time:any;
  created_by:any;
}

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements AfterViewInit{

  constructor(private dialog:MatDialog){}
  ngAfterViewInit() {
    
  }

  filteredOptions!: Observable<string[]>;

  displayedColumns: string[] = ['customer_name','mobile','booking_date','booking_time','status','booking_type','paid_date','paid_status','created_on_date','created_by'];
  dataSource: MatTableDataSource<bookingInfo> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayFn(booking:any){
    return booking?booking.customer_name:undefined;
  }

  openAddBookingDialog(){
    this.dialog.open(AddBookingComponent);
  }


}
