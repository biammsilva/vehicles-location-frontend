import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../vehicle';
import { VehiclesLocationService } from '../vehicles-location.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})

export class MapDetailComponent implements OnInit {
  markerOptions = {
    destination: {
      visible: false
    },
    waypoints: {
      visible: false
    }
  };
  zoom: number = 15
  id: string;
  locationsParsed;
  locations: Location[];

  constructor(
    private route: ActivatedRoute,
    private service: VehiclesLocationService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.getLocations(this.id).subscribe((data: Location[]) => {
      this.locations = data;
      this.parseLocations();
    })
  }

  parseLocations() {
    this.locationsParsed = this.locations.map((location) => {
      return {
        location: location
      }
    });
  }

}
