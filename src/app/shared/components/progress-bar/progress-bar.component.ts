import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  @Input() title!: string;
  @Input() percent!: number;
  @Input() colorClass!: string;
  constructor() {}

  public ngOnInit(): void {}
}
