import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiclesLocationService {
  url = environment.apiUrl;

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
