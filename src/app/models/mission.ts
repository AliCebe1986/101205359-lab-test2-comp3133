// This file defines the Mission interface used in the application.
// It includes properties for flight number, mission name, launch year, details, success status, links, and rocket information.
export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string | null;
    launch_success?: boolean; 
    links: {
      mission_patch_small: string | null;
      article_link: string | null;
      wikipedia: string | null;
      video_link: string | null;
    };
    rocket: {
      rocket_id: string;
      rocket_name: string;
      rocket_type: string;
    };
    
  }