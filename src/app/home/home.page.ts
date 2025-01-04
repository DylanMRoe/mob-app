import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonItem, IonInput } from '@ionic/angular/standalone';
import { settingsOutline } from 'ionicons/icons';
import {addIcons} from "ionicons";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, RouterLink, IonItem, IonInput],
})
export class HomePage {
  constructor() {
    addIcons({ settingsOutline });
  }
}
