import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'missions',
    renderMode: RenderMode.Prerender
  },
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'mission/:flight_number',
    renderMode: RenderMode.Client
  },
  {
    path: '**',
    renderMode: RenderMode.Client
  }
];
