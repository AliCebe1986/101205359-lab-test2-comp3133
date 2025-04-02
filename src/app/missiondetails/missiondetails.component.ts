import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to get route parameters
import { SpacexapiService } from '../network/spacexapi.service'; // Import the service
import { Mission } from '../models/mission'; // Import the interface
import { Location, NgIf, CommonModule } from '@angular/common'; // Import Location, NgIf and CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
  standalone: true,
  imports: [CommonModule, NgIf, HttpClientModule] // Add HttpClientModule to the imports array
})
export class MissiondetailsComponent implements OnInit {

  mission: Mission | null = null; // Variable to hold the specific mission details
  flightNumber: string | null = null; // Variable to hold the flight number from route

  // Inject ActivatedRoute, the service, and Location
  constructor(
    private route: ActivatedRoute,
    private spacexApi: SpacexapiService,
    private location: Location
  ) { }

  ngOnInit(): void {
    // Get the flight_number from the route parameters
    this.flightNumber = this.route.snapshot.paramMap.get('flight_number');

    if (this.flightNumber) {
      // Fetch the mission details using the flight number
      this.spacexApi.getMissionByFlightNumber(this.flightNumber).subscribe(data => {
        this.mission = data;
        console.log('Mission details loaded:', this.mission);
      });
    } else {
      console.error('Flight number not found in route parameters!');
      // Optionally, navigate back or show an error message
    }
  }

  // Method to go back to the previous page
  goBack(): void {
    this.location.back();
  }
}