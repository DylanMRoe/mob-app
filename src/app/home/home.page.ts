import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonInput } from '@ionic/angular/standalone';
import { settingsOutline } from 'ionicons/icons';
import {addIcons} from "ionicons";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonInput, FormsModule],
})
export class HomePage {
  searchName: string = "";

  constructor() {
    addIcons({ settingsOutline });
  }
}
