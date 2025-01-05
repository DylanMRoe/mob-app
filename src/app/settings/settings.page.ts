import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonCheckbox, IonItem, IonRadio, IonRadioGroup } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  standalone: true,
  imports: [IonRadioGroup, IonRadio, IonItem, IonCheckbox, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class SettingsPage implements OnInit {
  selectedValue: string = "Metric";

  constructor(private ds: DataService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    console.log(this.getValue);
    if(this.ds.get("Unit") == null){
      this.selectedValue = "Metric";
      this.ds.set("Unit", this.selectedValue);
    }
    else{
      this.setValue();
    }

    document.getElementById("radioGroup")?.setAttribute("value", this.selectedValue);
  }

  async getValue(){
    return await this.ds.get("Unit")
  }

  async setValue(){
    this.selectedValue = await this.ds.get("Unit");
  }

  unitChange(value: string){
    this.selectedValue = value;
    this.ds.set("Unit", this.selectedValue);
  }
}
