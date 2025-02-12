import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appRoutes } from './app.routes';  // ✅ Import routes

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),  // ✅ Ensure router is provided
    provideHttpClient(withFetch())  // ✅ Enable HttpClient in standalone mode
  ]
};
