import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-missionfilter',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  templateUrl: './missionfilter.component.html',
  styleUrl: './missionfilter.component.css'
})
export class MissionfilterComponent {
  @Input() selectedYear: string = '';
  @Input() launchSuccess: boolean | null = null;
  @Input() landSuccess: boolean | null = null;
  
  @Output() yearChanged = new EventEmitter<string>();
  @Output() launchSuccessChanged = new EventEmitter<boolean | null>();
  @Output() landSuccessChanged = new EventEmitter<boolean | null>();
  @Output() filtersCleared = new EventEmitter<void>();

  applyYearFilter(year: string): void {
    this.yearChanged.emit(year);
  }

  applyLaunchFilter(success: boolean | null): void {
    this.launchSuccess = success;
    this.launchSuccessChanged.emit(success);
  }

  applyLandFilter(success: boolean | null): void {
    this.landSuccess = success;
    this.landSuccessChanged.emit(success);
  }

  clearFilter(): void {
    this.selectedYear = '';
    this.launchSuccess = null;
    this.landSuccess = null;
    this.filtersCleared.emit();
  }
}
