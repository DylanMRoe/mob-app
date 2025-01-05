import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonButton, IonGrid, IonRow } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonRow, IonGrid, IonButton, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  searchName: string = "";
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  };
  searchResult: any = [];

  constructor(private ds: DataService, private mhs: MyHttpService, private router: Router) { }

  ngOnInit() {
    this.getSearchName();
  }

  async getSearchName(){
    this.searchName = await this.ds.get("searchName");
    this.options.url = this.options.url.concat(this.searchName);
    let result  = await this.mhs.get(this.options);
    this.searchResult = result.data;
    console.log(this.options.url);
  }

  async selectedCountryNews(selectedCountryCCA2: string){
    await this.ds.set("selectedCountryCCA2", selectedCountryCCA2);
    this.router.navigate(['/news']);
  }

  async selectedCountryWeather(LatLongArray: number[], capital: string){
    console.log(capital);
    await this.ds.set("selectedCountryCapital", capital);
    await this.ds.set("selectedCountryLatitude", LatLongArray[0]);
    await this.ds.set("selectedCountryLongitude", LatLongArray[1]);
    this.router.navigate(['/weather']);
    console.log("Latitude and Longitude: " + LatLongArray[0] + LatLongArray[1]);
  }
}
