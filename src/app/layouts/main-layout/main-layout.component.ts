import { Component, OnInit } from '@angular/core';
import { LoggingService } from '@core/services/logging.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit {
  constructor(private _log: LoggingService) {}

  ngOnInit(): void {
    this._log.log('aaa');
  }
}
