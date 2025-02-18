import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonList } from '@ionic/angular/standalone';
import { MyHttpService } from '../services/my-http.service';
import { DataService } from '../services/data.service';
import { HttpOptions } from '@capacitor/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
  standalone: true,
  imports: [IonList, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class NewsPage implements OnInit {
  cca2Code: string = "";
  apiKey: string = "pub_644621d316d9264a4b0077af4f36b18e08150"
  options: HttpOptions = {
    url: "https://newsdata.io/api/1/latest?apikey=" + this.apiKey + "&country="
  }
  searchResult: any = [];
  searchStatus: string = "";
  countryName: string = "";

  constructor(private ds: DataService, private mhs: MyHttpService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.pageSetUp();
  }

  async getCca2Code(){
    this.cca2Code = await this.ds.get("selectedCountryCCA2");
    
  }

  async request(){
    await this.getCca2Code();
    this.options.url = this.options.url.concat(this.cca2Code);
    return await this.mhs.get(this.options);
  }

  async pageSetUp(){
    let result = await this.request();

    this.searchResult = result.data.results;
    this.searchStatus = result.data.status;
    this.countryName = await this.ds.get("selectedCountryName");
  }
}
