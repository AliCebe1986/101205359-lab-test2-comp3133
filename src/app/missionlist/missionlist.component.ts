import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, NgIf, NgFor } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MissionfilterComponent } from '../missionfilter/missionfilter.component';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    NgIf, 
    NgFor, 
    MatToolbarModule, 
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MissionfilterComponent,
    RouterModule
  ]
})
export class MissionlistComponent implements OnInit {

  missions: Mission[] = [];
  filteredMissions: Mission[] = [];
  selectedYear: string = '';
  launchSuccess: boolean | null = null;
  landSuccess: boolean | null = null;

  constructor(private spacexApi: SpacexapiService, private router: Router) { }

  ngOnInit(): void {
    this.spacexApi.getAllMissions().subscribe(data => {
      this.missions = data;
      this.filteredMissions = data;
      console.log('Missions loaded:', this.missions);
    });
  }

  applyFilters(): void {
    this.filteredMissions = this.missions.filter(mission => {
      // Apply year filter if selected
      const yearMatch = !this.selectedYear || mission.launch_year === this.selectedYear;
      
      // Apply launch success filter if selected
      const launchMatch = this.launchSuccess === null || mission.launch_success === this.launchSuccess;
      
      // Apply land success filter if selected
      let landMatch = true;
      if (this.landSuccess !== null) {
        // Check if rocket property exists and has cores with landing success data
        if (mission.rocket && (mission as any).rocket.first_stage && (mission as any).rocket.first_stage.cores) {
          const cores = (mission as any).rocket.first_stage.cores;
          // If any core has landing data, check if it matches our filter
          if (cores.length > 0) {
            landMatch = cores.some((core: any) => 
              core.land_success === this.landSuccess
            );
          } else {
            // If no cores data available, don't match
            landMatch = false;
          }
        } else {
          // If no landing data available, don't match
          landMatch = false;
        }
      }
      
      return yearMatch && launchMatch && landMatch;
    });
    
    console.log(`Filtered missions: ${this.filteredMissions.length}`);
  }

  // Method called when year filter changes
  onYearChanged(year: string): void {
    this.selectedYear = year;
    this.applyFilters();
  }

  // Method called when launch success filter changes
  onLaunchSuccessChanged(success: boolean | null): void {
    this.launchSuccess = success;
    this.applyFilters();
  }

  // Method called when land success filter changes
  onLandSuccessChanged(success: boolean | null): void {
    this.landSuccess = success;
    this.applyFilters();
  }

  // Method called when all filters are cleared
  onFiltersCleared(): void {
    this.selectedYear = '';
    this.launchSuccess = null;
    this.landSuccess = null;
    this.filteredMissions = this.missions;
  }

  // Keeping this for backward compatibility
  filterMissionsByYear(year: string): void {
    this.selectedYear = year;
    this.applyFilters();
  }

  viewMissionDetails(flightNumber: number): void {
    this.router.navigate(['/mission', flightNumber]);
  }
}