import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandaloneCardComponent } from './standalone-card.component';

type DashboardCard = {
  title: string;
  metric: string;
  note: string;
  accent: string;
};

@Component({
  selector: 'standalone-dashboard',
  standalone: true,
  imports: [CommonModule, StandaloneCardComponent],
  templateUrl: './standalone-dashboard.component.html',
  styleUrl: './standalone-dashboard.component.css'
})
export class StandaloneDashboardComponent {
  readonly cards: DashboardCard[] = [
    {
      title: 'Build Health',
      metric: '94%',
      note: 'Last 24 hours steady',
      accent: '#f4b04f'
    },
    {
      title: 'Review Queue',
      metric: '18',
      note: 'Avg wait 3.1 hours',
      accent: '#2a9d8f'
    },
    {
      title: 'Release Readiness',
      metric: 'On Track',
      note: 'Next push Friday',
      accent: '#e76f51'
    }
  ];
}
