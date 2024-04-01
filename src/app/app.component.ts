import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherComponent } from "./component/weather/weather.component";
import { HttpClientModule } from '@angular/common/http';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, WeatherComponent,HttpClientModule]
})
export class AppComponent {
  title = 'experiment';
  data:any='';
constructor(){}

}
