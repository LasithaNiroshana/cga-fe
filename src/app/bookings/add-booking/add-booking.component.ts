import { Component } from '@angular/core';

export interface bookingInfo{
  booking_id:string;
  customer_name:string;
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
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.scss']
})
export class AddBookingComponent {
  booking:bookingInfo={
  booking_id:'',
  customer_name:'',
  booking_type:-1,
  booking_date:[],
  booking_time:'',
  mobile:'',
  status:-1,
  booking_source:-1,
  paid_status:-1,
  paid_date:[],
  created_on_date:[],
  created_on_time:[],
  created_by:[]
  }
}
