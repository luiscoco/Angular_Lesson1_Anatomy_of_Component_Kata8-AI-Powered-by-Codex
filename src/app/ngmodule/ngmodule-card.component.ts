import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngmodule-card',
  standalone: true,
  templateUrl: './ngmodule-card.component.html',
  styleUrl: './ngmodule-card.component.css'
})
export class NgModuleCardComponent {
  @Input() title = '';
  @Input() metric = '';
  @Input() note = '';
  @Input() accent = '#f4b04f';
  @Input() delay = 0;
}
