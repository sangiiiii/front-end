import { Component, OnInit } from '@angular/core';
import { BusDetails } from '../BusDetails';
import { BusDetailsService } from '../bus-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bus-details-list',
  templateUrl: './bus-details-list.component.html',
  styleUrls: ['./bus-details-list.component.css']
})
export class BusDetailsListComponent implements OnInit {
  busDetails: BusDetails[] = [];


  constructor(private busDetailsService: BusDetailsService ,
    private router: Router) { }

  ngOnInit(): void {
    this.getBusDetails();
  }

  private getBusDetails(){
    this.busDetailsService.getBusDetailsList().subscribe(data => {
      this.busDetails = data;

    });
  }

  BusDetails(busId: number){
    this.router.navigate(['busDetails', busId]);
  }

  updateBusDetails(busId: number){
    this.router.navigate(['updateBusDetails', busId]);
  }

  deleteBusDetails(busId: number){
    this.busDetailsService.deleteBusDetails(busId).subscribe( data => {
      //console.log(data);
      this.getBusDetails();
    })
  }
}