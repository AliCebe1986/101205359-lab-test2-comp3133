import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// Angular Material modülleri
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
      AppComponent
      // Artık bileşenler standalone olduğu için burada tanımlanmıyor
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule, // Add HttpClientModule here
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatListModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule
    ],
    providers: [
      provideRouter(routes)
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
