import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonCard, IonCardContent, IonCardTitle, IonCardHeader, IonCardSubtitle, IonButton } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { MyHttpService } from '../services/my-http.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonCard, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CountriesPage implements OnInit {

  searchName: string = "";
  options: HttpOptions = {
    url: "https://restcountries.com/v3.1/name/"
  };
  searchResult: any = [];

  constructor(private ds: DataService, private mhs: MyHttpService) { }

  ngOnInit() {
    this.getSearchName();
  }

  async getSearchName(){
    this.searchName = await this.ds.get("searchName");
    this.options.url = this.options.url.concat(this.searchName);
    let result  = await this.mhs.get(this.options);
    this.searchResult = result.data;
  }

}
