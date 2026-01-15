import { Component, Input } from '@angular/core';

@Component({
  selector: 'standalone-card',
  standalone: true,
  templateUrl: './standalone-card.component.html',
  styleUrl: './standalone-card.component.css'
})
export class StandaloneCardComponent {
  @Input() title = '';
  @Input() metric = '';
  @Input() note = '';
  @Input() accent = '#f4b04f';
  @Input() delay = 0;
}
