// src/app/network/spacexapi.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs';
import { Mission } from '../models/mission'; // Import the interface

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  // Base URL for the SpaceX API (v3 used here)
  private REST_API_URL = 'https://api.spacexdata.com/v3';

  // Inject HttpClient
  constructor(private http: HttpClient) { }

  // Method to get all launches
  getAllMissions(): Observable<Mission[]> {
    const requestUrl = `${this.REST_API_URL}/launches`;
    return this.http.get<Mission[]>(requestUrl); // Specify the expected return type
  }

  // Method to get a specific launch by flight number
  getMissionByFlightNumber(flightNumber: string | number): Observable<Mission> { // Can accept string or number
    const requestUrl = `${this.REST_API_URL}/launches/${flightNumber}`;
    return this.http.get<Mission>(requestUrl); // Specify the expected return type
  }

  // Method to get launches for a specific year (Optional based on filtering strategy)
  getMissionsByYear(year: string): Observable<Mission[]> {
    const requestUrl = `${this.REST_API_URL}/launches?launch_year=${year}`;
    return this.http.get<Mission[]>(requestUrl);
  }
}