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
  zoom: number = 12;
  vehicles: Vehicle[];
  loading = true;
  vehiclesSearchResults: Vehicle[];

  constructor(
    private router: Router,
    private service: VehiclesLocationService
  ) { }

  ngOnInit(): void {
    this.service.getVehicles().subscribe((data: Vehicle[]) => {
      this.loading = false;
      this.vehicles = data;
      this.vehiclesSearchResults = data;
    });
  }

  openMapDetail(vehicleId) {
    this.router.navigate(['map-detail', vehicleId]);
  }

  search(event){
    let text = event.target.value;
    if(text===""){
      this.vehiclesSearchResults = this.vehicles;
    } else {
      this.vehiclesSearchResults = this.vehicles.filter(vehicle =>
        vehicle.id.toLowerCase().includes(text.toLowerCase())
      );
    }
  }

}
