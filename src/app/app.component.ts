import {Component} from '@angular/core';
import {AppRoutes} from "./shared/enum";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  AppRoutes = AppRoutes;
}
