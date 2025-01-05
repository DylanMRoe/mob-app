import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class WeatherPage implements OnInit {
  latitude: string = "";
  longitude: string = "";
  unit: string = "";
  apiKey: string = "678c2ca29f2cf5025ac76083fa253da9";
  options: HttpOptions = {
    url: "https://api.openweathermap.org/data/2.5/weather?"
  }

  constructor(private ds: DataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getLatLong();
  }

  async getLatLong(){
    this.latitude = await this.ds.get("selectedCountryLatitude");
    this.longitude = await this.ds.get("selectedCountryLongitude");
    this.unit = await this.ds.get("Unit");
    this.options.url = this.options.url.concat("lat=" + this.latitude + "&lon=" + this.longitude + "&units=" + this.unit + 
      "&appid=" + this.apiKey);
    console.log(this.options.url);
  }

}
