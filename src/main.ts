import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterOutlet],
  template: `
    <router-outlet />
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [provideRouter(routes),provideHttpClient(withInterceptorsFromDi()),],
});
