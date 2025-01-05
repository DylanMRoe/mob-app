import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  selectedValue: string = "";

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.setValue();
  }

  async setValue(){
    this.selectedValue =  await this.ds.get("Unit");
    document.getElementById("radioGroup")?.setAttribute("value", this.selectedValue);
  }

  async unitChange(value: string){
    this.selectedValue = value;
    await this.ds.set("Unit", this.selectedValue);
  }
}
