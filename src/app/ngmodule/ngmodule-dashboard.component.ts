import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModuleCardComponent } from './ngmodule-card.component';

type DashboardCard = {
  title: string;
  metric: string;
  note: string;
  accent: string;
};

@Component({
  selector: 'ngmodule-dashboard',
  standalone: true,
  imports: [CommonModule, NgModuleCardComponent],
  templateUrl: './ngmodule-dashboard.component.html',
  styleUrl: './ngmodule-dashboard.component.css'
})
export class NgModuleDashboardComponent {
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
