# SpaceX Mission Explorer - Lab Test 2 (COMP3133)

This project is an Angular-based web application that uses the SpaceX API to display and filter SpaceX launch missions. The application allows users to browse through SpaceX missions, view detailed information about each mission, and apply various filters to narrow down the mission list.

## Features

- **Mission List:** View all SpaceX missions with essential information
- **Mission Details:** View comprehensive details about a specific mission
- **Mission Filtering:** Filter missions by:
  - Launch year
  - Launch success status
  - Land success status (when available)
- **Responsive Design:** Works on both desktop and mobile devices

## Project Structure

The project follows a component-based architecture:

- **Mission List Component:** Displays the list of all missions with filtering capabilities
- **Mission Details Component:** Shows detailed information about a selected mission
- **Mission Filter Component:** Provides UI for applying various filters to the mission list
- **SpaceX API Service:** Handles all communication with the SpaceX API

## Technical Implementation

- Built with Angular 19.2.4
- Uses Angular Material for UI components
- Implements Reactive programming with RxJS Observables
- Follows best practices for TypeScript interfaces and models

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with Karma, use the following command:

```bash
ng test
```

## API Reference

This project uses the SpaceX API v3. Key endpoints used are:
- `/launches` - Get all launches
- `/launches/{flight_number}` - Get specific launch by flight number
- `/launches?launch_year={year}` - Get launches for a specific year
