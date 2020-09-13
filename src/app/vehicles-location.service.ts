import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiclesLocationService {
  url = 'http://localhost:8000'

  constructor(
    private http: HttpClient
  ) { }

  getVehicles() {
    return this.http.get(`${this.url}/vehicles/`)
  }

  getLocations(vehicleId) {
    return this.http.get(`${this.url}/vehicles/${vehicleId}/locations/`)
  }

}
