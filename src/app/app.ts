import { Component } from '@angular/core';
import { NgModuleDashboardModule } from './ngmodule/ngmodule-dashboard.module';
import { StandaloneDashboardComponent } from './standalone/standalone-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgModuleDashboardModule, StandaloneDashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
