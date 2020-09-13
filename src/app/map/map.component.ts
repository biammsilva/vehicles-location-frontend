import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle';
import { VehiclesLocationService } from '../vehicles-location.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  officeCoordinates = {
    lat: 52.53,
    lng: 13.403
  }
  zoom: number = 15;
  vehicles: Vehicle[];

  constructor(
    private router: Router,
    private service: VehiclesLocationService
  ) { }

  ngOnInit(): void {
    this.service.getVehicles().subscribe((data: Vehicle[]) => {
      this.vehicles = data;
    })
  }

  openMapDetail(vehicleId) {
    this.router.navigate(['map-detail', vehicleId]);
  }

}
