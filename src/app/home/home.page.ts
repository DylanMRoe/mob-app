import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, IonItem, IonInput } from '@ionic/angular/standalone';
import { settingsOutline } from 'ionicons/icons';
import {addIcons} from "ionicons";
import { RouterLink, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonIcon, IonButtons, RouterLink, IonItem, IonInput, FormsModule],
})
export class HomePage {
  searchName: string = "";

  constructor(private ds: DataService, private router: Router) {
    addIcons({ settingsOutline });
  }

  async search(){
    await this.ds.set("searchName", this.searchName);
    this.router.navigate(['/countries']);
  }
}
