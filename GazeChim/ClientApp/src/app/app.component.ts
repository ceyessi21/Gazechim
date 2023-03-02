import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initializeApp();
  }

  initializeApp() {
    if (Capacitor.isNativePlatform()) {
      window.location.href = 'gazechim.app://';
    }
  }
}
