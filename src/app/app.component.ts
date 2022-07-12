import {Component, OnInit} from '@angular/core';
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
  }

  changeTheme(theme: string) {
    this.themeService.switchTheme(theme);
  }
}
